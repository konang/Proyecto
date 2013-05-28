var tiempoMoverComparacionP;
var tiempoMoverComparacionE;

var comparacion = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : 0
});

//Imagen de la pantalla Comparacion que se despliega en la esquina derecha inferior
var imgComparacion = Ti.UI.createImageView({
	left : "74%",
	top : "79%",
	opacity: 0.5,
	width : "30%",
	image : 'img/imgComparacion.png'
});


//Etiqueta que contiene el texto del titulo de la pantalla
var tituloComparacion = Titanium.UI.createLabel({
	color : '#000',
	text : 'Comparación entre 2 participantes',
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Medium'
	},
	top : "5%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
});

//Elemento donde se seleeciona el criterio de busqueda de un participante
var pickerComparacion = Ti.UI.createPicker({
	top : "23%",
	width : "75%"
});
pickerComparacion.addEventListener('change', function(e) {
	if (e.rowIndex == 0 || e.rowIndex == 2) {
		fieldBuscar1.keyboardType = Titanium.UI.KEYBOARD_NUMBER_PAD;
	} else {
		fieldBuscar1.keyboardType = Titanium.UI.KEYBOARD_DEFAULT;
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

pickerComparacion.add(data);
pickerComparacion.selectionIndicator = true;

//Elemento donde se seleeciona el criterio de busqueda de un participante
var pickerComparacion2 = Ti.UI.createPicker({
	top : "55%",
	width : "75%"
});
pickerComparacion2.addEventListener('change', function(e) {
	if (e.rowIndex == 0 || e.rowIndex == 2) {
		fieldBuscar2.keyboardType = Titanium.UI.KEYBOARD_NUMBER_PAD;
	} else {
		fieldBuscar2.keyboardType = Titanium.UI.KEYBOARD_DEFAULT;
	}
});

pickerComparacion2.add(data);
pickerComparacion2.selectionIndicator = true;

//Etiqueta para el cuadro de buscar1
var etiquetaBuscar1 = Titanium.UI.createLabel({
	color : '#000',
	text : 'Participante 1',
	font : {
		fontSize : "20%",
		fontFamily : 'Helvetica Neue'
	},
	top : "35%"
});

//Recuadro donde el usuario ingresara la matricula numero 1 a buscar para la comparacion
var fieldBuscar1 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : "41%",
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS,
	width : "75%",
	height : "12%"
});

//Etiqueta para el cuadro de buscar2
var etiquetaBuscar2 = Titanium.UI.createLabel({
	color : '#000',
	text : 'Participante 2',
	font : {
		fontSize : 20,
		fontFamily : 'Roboto'
	},
	top : "67%"
});

//Recuadro donde el usuario ingresara la matricula numero 2 a buscar para la comparacion
var fieldBuscar2 = Ti.UI.createTextField({
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color : '#336699',
	top : "73%",
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS,
	width : "75%",
	height : "12%"
});

// Boton para activar la busqueda de la comparcion de participantes
var btnBuscarComparacion = Titanium.UI.createButton({
	top : "85%",
	width : "20%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundImage : "img/action_search.png",
	borderColor : '#fff',
	backgroundSelectedImage : "img/action_search_dis.png",
	height : "15%"
})
btnBuscarComparacion.addEventListener('click', function(e) {

	if (banP) {
		if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
			banP = false;
			toast.show();
			comparacion.add(fondoComparacion);
			comparacionParticipante();
		} else {
			alert("No hay conexion a internet");
		}
	}
});

//funcion para buscar los 2 participantes a comparar
function comparacionParticipante() {
	comparacionPhp.getComparacionPhp(pickerComparacion.getSelectedRow(0).title, fieldBuscar1.value, pickerComparacion2.getSelectedRow(0).title, fieldBuscar2.value, function(response) {
		despliegaDetallesComparacion(response);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			buttonNames : ['OK']
		}).show();
		banP = true;
		comparacion.remove(fondoComparacion);
	});
}

//Vista que ocurece el fondo mientras se despliegan los datos de la busqueda
var fondoComparacion = Titanium.UI.createView({
	backgroundColor : '#000',
	opacity : 0.5,
	height : "100%",
	top : 0
});

//Vista donde se despliegan los datos del participante que se busco
var datosComparacion = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "70%",
	top : "12%",
	width : "100%",
	left : "100%"
})
datosComparacion.addEventListener('swipe', function(e) {
	tiempoMoverComparacionP = setInterval(function() {
		moverComparacionFuera(datosComparacion);
	}, 2);
	tiempoMoverComparacionE = setInterval(function() {
		moverBackComparacionFuera(btnRegresarComparacion);
	}, 5);
});

// Boton para regresar a la pantalla anterior
var btnRegresarComparacion = Titanium.UI.createButton({
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "img/back.png",
	backgroundImage : "img/back1.png"
})
btnRegresarComparacion.addEventListener('click', function(e) {
	tiempoMoverComparacionP = setInterval(function() {
		moverComparacionFuera(datosComparacion);
	}, 2);
	tiempoMoverComparacionE = setInterval(function() {
		moverBackComparacionFuera(btnRegresarComparacion);
	}, 5);
});

function despliegaDetallesComparacion(response) {

	comparacion.add(btnRegresarComparacion);
	cargarDatosDetalleC(response);
	menu.add(datosComparacion);
	tiempoMoverComparacionP = setInterval(function() {
		moverComparacion(datosComparacion);
	}, 2);
	tiempoMoverComparacionE = setInterval(function() {
		moverBackComparacion(btnRegresarComparacion);
	}, 5);
}

//funcion para mover la pantalla emergente de los detalles de la comparacion hacia fuera de la pantalla
function moverComparacionFuera(pantalla) {
	if (pantalla.left == "100%") {
		clearInterval(tiempoMoverComparacionP);
		comparacion.remove(fondoComparacion);
		comparacion.remove(btnRegresarComparacion);
		menu.remove(datosComparacion);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance + 1;
		pantalla.left = "" + avance + "%";
	}
}

//funcion para mover el boton de regresar emergente de los detalles de la comparacion hacia fuera de la pantalla
function moverBackComparacionFuera(elemento) {
	if (elemento.left == "-15%") {
		clearInterval(tiempoMoverComparacionE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance - 1;
		elemento.left = "" + avance + "%";
	}
}

function moverComparacion(pantalla) {
	if (pantalla.left == "0%") {
		clearInterval(tiempoMoverComparacionP);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBackComparacion(elemento) {
	if (elemento.left == "0%") {
		clearInterval(tiempoMoverComparacionE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance + 1;
		elemento.left = "" + avance + "%";
	}
}

function cargarComparacion() {
	comparacion.add(tituloComparacion);
	comparacion.add(imgComparacion);
	comparacion.add(fieldBuscar1);
	comparacion.add(fieldBuscar2);
	comparacion.add(btnBuscarComparacion);
	comparacion.add(etiquetaBuscar1);
	comparacion.add(etiquetaBuscar2);
	comparacion.add(pickerComparacion);
	comparacion.add(pickerComparacion2);
	comparacion.left = "100%";
	comparacion.width = "100%";
}

pickerComparacion2.setSelectedRow(0, 1, false);
// select Nombre
pickerComparacion.setSelectedRow(0, 1, false);
// select Nombre