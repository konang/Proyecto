//Etiqueta para el cuadro del ID del participante 1
var etiquetaPosicionDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "30%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%",
	left: "38%",
	//width:'auto'
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
	left: "77%",
	//width:'auto'
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
	left: "5%",
	//width:'auto'
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
	left: "35%",
	//width:'auto'
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
	left: "70%",
	//width:'auto'
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
	left: "5%",
	//width:'auto'
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
	left: "35%",
	//width:'auto'
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
	left: "70%",
	//width:'auto'
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
	left: "5%",
	//width:'auto'
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
	left: "35%",
	//width:'auto'
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
	left: "70%",
	//width:'auto'
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
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre del participante 1
var etiquetaPuntajeDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "50%",
	left: "35%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre del participante 2
var etiquetaPuntajeDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "50%",
	left: "70%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaPuntajeC = Titanium.UI.createLabel({
	color : '#000',
	text : "Puntaje:",
	font : {
		fontSize : "18%",
		fontFamily : 'Roboto-Light'
	},
	top : "50%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre del participante 1
var etiquetaIdDetalleC1 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "20%",
		fontFamily : 'Roboto-Light'
	},
	top : "60%",
	left: "35%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre del participante 2
var etiquetaIdDetalleC2 = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "20%",
		fontFamily : 'Roboto-Light'
	},
	top : "60%",
	left: "70%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaIdC = Titanium.UI.createLabel({
	color : '#000',
	text : "ID:",
	font : {
		fontSize : "20%",
		fontFamily : 'Roboto-Light'
	},
	top : "60%",
	left: "5%",
	//width:'auto'
});


function cargarDatosDetalleC(response){
	etiquetaNombreDetalleC1.text = "" + response.participantes[0].nom;
	etiquetaIdDetalleC1.text = "" + response.participantes[0].id;
	etiquetaIdpartDetalleC1.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalleC1.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalleC1.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalleC1.text = "" + response.participantes[0].pos;
	
	etiquetaNombreDetalleC2.text = "" + response.participantes[1].nom;
	etiquetaIdDetalleC2.text = "" + response.participantes[1].id;
	etiquetaIdpartDetalleC2.text = "" + response.participantes[1].idPart;
	etiquetaMatriculaDetalleC2.text = "" + response.participantes[1].mat;
	etiquetaPuntajeDetalleC2.text = "" + response.participantes[1].puntaje;
	etiquetaPosicionDetalleC2.text = "" + response.participantes[1].pos;
	
	datosComparacion.add(etiquetaNombreDetalleC1);
	datosComparacion.add(etiquetaIdDetalleC1);
	datosComparacion.add(etiquetaIdpartDetalleC1);
	datosComparacion.add(etiquetaMatriculaDetalleC1);
	datosComparacion.add(etiquetaPuntajeDetalleC1);
	datosComparacion.add(etiquetaPosicionDetalleC1);
	
	datosComparacion.add(etiquetaNombreDetalleC2);
	datosComparacion.add(etiquetaIdDetalleC2);
	datosComparacion.add(etiquetaIdpartDetalleC2);
	datosComparacion.add(etiquetaMatriculaDetalleC2);
	datosComparacion.add(etiquetaPuntajeDetalleC2);
	datosComparacion.add(etiquetaPosicionDetalleC2);
	
	datosComparacion.add(etiquetaNombreC);
	datosComparacion.add(etiquetaIdC);
	datosComparacion.add(etiquetaIdpartC);
	datosComparacion.add(etiquetaMatriculaC);
	datosComparacion.add(etiquetaPuntajeC);
	//datos.add(etiquetaPosicion);
}
