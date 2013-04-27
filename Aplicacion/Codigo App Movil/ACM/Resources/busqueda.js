var tiempoMoverBusquedaP;
var tiempoMoverBusquedaE;

var busqueda = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : 0
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloBusqueda = Titanium.UI.createLabel({
	color : '#000',
	text : 'Busqueda de participante por...',
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Medium'
	},
	top : "12%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//width:'auto'
});

//Elemento donde se seleeciona el criterio de busqueda de un participante
var pickerBusqueda = Ti.UI.createPicker({
  top:"30%",
  width: "75%"
});
pickerBusqueda.addEventListener('change', function(e) {
	//alert(""+e.rowIndex);
	if (e.rowIndex == 0 || e.rowIndex == 2) { 
		fieldBuscar.keyboardType = Titanium.UI.KEYBOARD_NUMBER_PAD;
	} else {
		fieldBuscar.keyboardType = Titanium.UI.KEYBOARD_DEFAULT;
	}
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Matricula'});
data[1]=Ti.UI.createPickerRow({title:'Nombre'});
data[2]=Ti.UI.createPickerRow({title:'Posicion'});
data[3]=Ti.UI.createPickerRow({title:'ID'});

pickerBusqueda.add(data);
pickerBusqueda.selectionIndicator = true;

//Recuadro donde el usuario ingresara la matricula a buscar
var fieldBuscar = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : "45%",
	//left: "10%",
	width : "75%",
	height : "12%"
});

// Boton para activar la busqueda del participante
var btnBuscar = Titanium.UI.createButton({
	//title: 'Buscar',
	top : "80%",
	//left: "10%",
	width : "20%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundImage : "images/action_search.png",
	borderColor : '#fff',
	backgroundSelectedImage : "images/action_search_dis.png",
	height : "15%"
})
btnBuscar.addEventListener('click', function(e) {
	//toast.show();
	if (banP) {
		banP = false;
		busqueda.add(fondoBusqueda);
		busquedaParticipante();
	}
});


//funcion para buscar un participante
function busquedaParticipante() {
	//tablaRanking.setData([]);
	//alert(""+pickerBusqueda.getSelectedRow(0).title);
	busquedaPhp.getBusquedaPhp(pickerBusqueda.getSelectedRow(0).title, fieldBuscar.value , function(response) {
		//getting an item out of the json response
			despliegaDetallesParticipante(response);
			//alert("" + response.participantes[0].nom);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "API call failed",
			message : e,
			buttonNames : ['OK']
		}).show();
	});
}

//Vista que ocurece el fondo mientras se despliegan los datos de la busqueda
var fondoBusqueda = Titanium.UI.createView({
	backgroundColor : '#000',
	opacity : 0.5,
	height : "100%",
	top : 0
});

//Vista donde se despliegan los datos del participante que se busco
var datosBusqueda = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "70%",
	top : "20%",
	width : "100%",
	left : "100%"
})
datosBusqueda.addEventListener('swipe', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverBusquedaP = setInterval(function() {
		moverBusquedaFuera(datosBusqueda);
	}, 2);
	tiempoMoverBusquedaE = setInterval(function() {
		moverBackBusquedaFuera(btnRegresarBusqueda);
	}, 5);
});

// Boton para regresar a la pantalla anterior
var btnRegresarBusqueda = Titanium.UI.createButton({
	//title: 'Regresar',
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "images/back.png",
	backgroundImage : "images/back1.png"
})
btnRegresarBusqueda.addEventListener('click', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverBusquedaP = setInterval(function() {
		moverBusquedaFuera(datosBusqueda);
	}, 2);
	tiempoMoverBusquedaE = setInterval(function() {
		moverBackBusquedaFuera(btnRegresarBusqueda);
	}, 5);
});

function despliegaDetallesParticipante(response) {

	busqueda.add(btnRegresarBusqueda);
	cargarDatosDetalleB(response);
	busqueda.add(datosBusqueda);
	tiempoMoverBusquedaP = setInterval(function() {
		moverBusqueda(datosBusqueda);
	}, 2);
	tiempoMoverBusquedaE = setInterval(function() {
		moverBackBusqueda(btnRegresarBusqueda);
	}, 5);
}

//funcion para mover la pantalla emergente de los detalles de la busqueda hacia fuera de la pantalla
function moverBusquedaFuera(pantalla) {
	if (pantalla.left == "100%") {
		clearInterval(tiempoMoverBusquedaP);
		busqueda.remove(fondoBusqueda);
		busqueda.remove(btnRegresarBusqueda);
		busqueda.remove(datosBusqueda);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance + 1;
		pantalla.left = "" + avance + "%";
	}
}

//funcion para mover el boton de regresar emergente de los detalles de la comparacion hacia fuera de la pantalla
function moverBackBusquedaFuera(elemento) {
	if (elemento.left == "-15%") {
		clearInterval(tiempoMoverBusquedaE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance - 1;
		elemento.left = "" + avance + "%";
	}
}

function moverBusqueda(pantalla) {
	if (pantalla.left == "0%") {
		clearInterval(tiempoMoverBusquedaP);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBackBusqueda(elemento) {
	if (elemento.left == "0%") {
		clearInterval(tiempoMoverBusquedaE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		//alert("" + avance);
		avance = avance + 1;
		elemento.left = "" + avance + "%";
	}
}

function cargarBusqueda() {
	busqueda.add(tituloBusqueda);
	busqueda.add(fieldBuscar);
	busqueda.add(btnBuscar);
	busqueda.add(pickerBusqueda);
	busqueda.left = "100%";
	busqueda.width = "100%";
}

pickerBusqueda.setSelectedRow(0, 1, false); // select Nombre