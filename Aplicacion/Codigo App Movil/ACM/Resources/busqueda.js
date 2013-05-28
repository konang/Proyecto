var tiempoMoverBusquedaP;
var tiempoMoverBusquedaE;

var busqueda = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : 0
});

//Imagen de la pantalla Busqueda que se despliega en la esquina derecha inferior
var imgBusqueda = Ti.UI.createImageView({
	left : "74%",
	top : "70%",
	//height: "20%",
	opacity: 0.5,
	width : "30%",
	image : 'img/imgBusqueda.png'
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloBusqueda = Titanium.UI.createLabel({
	color : '#000',
	text : 'Búsqueda de participante por...',
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Medium'
	},
	top : "12%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});

//Elemento donde se seleeciona el criterio de busqueda de un participante
var pickerBusqueda = Ti.UI.createPicker({
	top : "30%",
	width : "75%"
});
pickerBusqueda.addEventListener('change', function(e) {
	if (e.rowIndex == 0 || e.rowIndex == 2) {
		fieldBuscar.keyboardType = Titanium.UI.KEYBOARD_NUMBER_PAD;
	} else {
		fieldBuscar.keyboardType = Titanium.UI.KEYBOARD_DEFAULT;
	}
});

var data = [];
data[0] = Ti.UI.createPickerRow({
	title : 'Matricula'
});
data[1] = Ti.UI.createPickerRow({
	title : 'Nombre'
});
data[2] = Ti.UI.createPickerRow({
	title : 'Posicion'
});
data[3] = Ti.UI.createPickerRow({
	title : 'ID'
});

pickerBusqueda.add(data);
pickerBusqueda.selectionIndicator = true;

//Recuadro donde el usuario ingresara la matricula a buscar
var fieldBuscar = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : "45%",
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS,
	width : "75%",
	height : "12%"
});

// Boton para activar la busqueda del participante
var btnBuscar = Titanium.UI.createButton({
	top : "80%",
	width : "20%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundImage : "img/action_search.png",
	borderColor : '#fff',
	backgroundSelectedImage : "img/action_search_dis.png",
	height : "15%"
})
btnBuscar.addEventListener('click', function(e) {
	if (banP) {
		if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
			toast.show();
			banP = false;
			busqueda.add(fondoBusqueda);
			busquedaParticipante();
		} else {
			alert("No hay conexion a internet");
		}
	}
});

//funcion para buscar un participante
function busquedaParticipante() {
	busquedaPhp.getBusquedaPhp(pickerBusqueda.getSelectedRow(0).title, fieldBuscar.value, function(response) {
		despliegaDetallesParticipante(response);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
		banP = true;
		busqueda.remove(fondoBusqueda);
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
	top : "15%",
	width : "100%",
	left : "100%"
})
datosBusqueda.addEventListener('swipe', function(e) {
	tiempoMoverBusquedaP = setInterval(function() {
		moverBusquedaFuera(datosBusqueda);
	}, 2);
	tiempoMoverBusquedaE = setInterval(function() {
		moverBackBusquedaFuera(btnRegresarBusqueda);
	}, 5);
});

// Boton para regresar a la pantalla anterior
var btnRegresarBusqueda = Titanium.UI.createButton({
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "img/back.png",
	backgroundImage : "img/back1.png"
})
btnRegresarBusqueda.addEventListener('click', function(e) {
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
	menu.add(datosBusqueda);
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
		menu.remove(datosBusqueda);
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
	busqueda.add(imgBusqueda);
	busqueda.add(pickerBusqueda);
	busqueda.left = "100%";
	busqueda.width = "100%";
}

pickerBusqueda.setSelectedRow(0, 1, false);
// select Nombre