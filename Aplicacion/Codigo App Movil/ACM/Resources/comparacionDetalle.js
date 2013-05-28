var fondoGanador = Titanium.UI.createImageView({
	backgroundColor : '#313DE8',
	opacity : 0.5,
	height : '100%',
	width : '35%',
	top : 0
});

//Etiqueta para el cuadro del ID del participante 1
var etiquetaPosicionDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "30%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%",
	left : "38%"
});

//Etiqueta para el cuadro del ID del participante 2
var etiquetaPosicionDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "30%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%",
	left : "77%"
});

//Etiqueta indicar que es para el cuadro del ID
var etiquetaPosicionC = Titanium.UI.createLabel({
	color : '#000',
	text : "Posicion:",
	font : {
		fontSize : "30%",
		fontFamily : 'Roboto'
	},
	top : "5%",
	left : "5%"
});

//Etiqueta para el cuadro del Id del participante con el sistema del participante 1
var etiquetaIdpartDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "15%",
		fontFamily : 'Roboto-Light'
	},
	top : "20%",
	left : "35%"
});

//Etiqueta para el cuadro del Id del participante con el sistema del participante 2
var etiquetaIdpartDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "15%",
		fontFamily : 'Roboto-Light'
	},
	top : "20%",
	left : "70%"
});

//Etiqueta indicar que es para el cuadro del Id del participante con el sistema
var etiquetaIdpartC = Titanium.UI.createLabel({
	color : '#000',
	text : "Id part:",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "20%",
	left : "5%"
});

//Etiqueta para el cuadro del nombre del participante 1
var etiquetaMatriculaDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "30%",
	left : "35%"
});

//Etiqueta para el cuadro del nombre del participante 2
var etiquetaMatriculaDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "30%",
	left : "70%"
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaMatriculaC = Titanium.UI.createLabel({
	color : '#000',
	text : "Matricula:",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "30%",
	left : "5%"
});

//Etiqueta para el cuadro del nombre del participante 1
var etiquetaNombreDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left : "35%"
});

//Etiqueta para el cuadro del nombre del participante 2
var etiquetaNombreDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left : "70%"
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaNombreC = Titanium.UI.createLabel({
	color : '#000',
	text : "Nombre:",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left : "5%"
});

//Etiqueta para el cuadro del nombre del participante 1
var etiquetaPuntajeDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "55%",
	left : "35%"
});

//Etiqueta para el cuadro del nombre del participante 2
var etiquetaPuntajeDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "55%",
	left : "70%"
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaPuntajeC = Titanium.UI.createLabel({
	color : '#000',
	text : "Puntaje:",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "55%",
	left : "5%"
});

var imageGanador = Ti.UI.createImageView({
	image : '/img/first.png',
	width: '15%',
	top: '73%'
});

function cargarDatosDetalleC(response) {
	etiquetaNombreDetalleC1.text = "" + response.participantes[0].nom;
	etiquetaIdpartDetalleC1.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalleC1.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalleC1.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalleC1.text = "" + response.participantes[0].pos;

	etiquetaNombreDetalleC2.text = "" + response.participantes[1].nom;
	etiquetaIdpartDetalleC2.text = "" + response.participantes[1].idPart;
	etiquetaMatriculaDetalleC2.text = "" + response.participantes[1].mat;
	etiquetaPuntajeDetalleC2.text = "" + response.participantes[1].puntaje;
	etiquetaPosicionDetalleC2.text = "" + response.participantes[1].pos;
	
	if (parseInt(response.participantes[0].pos) >= parseInt(response.participantes[1].pos)) {
		fondoGanador.left = "64%";
		imageGanador.left = "72%";
	} else {
		fondoGanador.left = "30%";
		imageGanador.left = "36%";
	}

	datosComparacion.add(fondoGanador);

	datosComparacion.add(etiquetaNombreDetalleC1);
	datosComparacion.add(etiquetaIdpartDetalleC1);
	datosComparacion.add(etiquetaMatriculaDetalleC1);
	datosComparacion.add(etiquetaPuntajeDetalleC1);
	datosComparacion.add(etiquetaPosicionDetalleC1);

	datosComparacion.add(etiquetaNombreDetalleC2);
	datosComparacion.add(etiquetaIdpartDetalleC2);
	datosComparacion.add(etiquetaMatriculaDetalleC2);
	datosComparacion.add(etiquetaPuntajeDetalleC2);
	datosComparacion.add(etiquetaPosicionDetalleC2);

	datosComparacion.add(etiquetaNombreC);
	datosComparacion.add(etiquetaIdpartC);
	datosComparacion.add(etiquetaMatriculaC);
	datosComparacion.add(etiquetaPuntajeC);
	datosComparacion.add(imageGanador);
}
