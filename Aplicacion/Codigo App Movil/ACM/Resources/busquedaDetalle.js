//Etiqueta para el cuadro del ID
var etiquetaPosicionDetalleB = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "40%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%"
});

//Etiqueta indicar que es para el cuadro del ID
var etiquetaPosicionB = Titanium.UI.createLabel({
	color : '#000',
	text : "Posicion:",
	font : {
		fontSize : "40%",
		fontFamily : 'Roboto'
	},
	top : "5%",
	left: "5%"
});

//Etiqueta para el cuadro del Id del participante con el sistema
var etiquetaIdpartDetalleB = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "25%",
	left: "50%"
});

//Etiqueta indicar que es para el cuadro del Id del participante con el sistema
var etiquetaIdpartB = Titanium.UI.createLabel({
	color : '#000',
	text : "Id part:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "25%",
	left: "5%"
});

//Etiqueta para el cuadro de la matricula
var etiquetaMatriculaDetalleB = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left: "50%"
});

//Etiqueta indicar que es para el cuadro de la matricula
var etiquetaMatriculaB = Titanium.UI.createLabel({
	color : '#000',
	text : "Matricula:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left: "5%"
});

//Etiqueta para el cuadro del nombre
var etiquetaNombreDetalleB = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "55%",
	left: "50%"
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaNombreB = Titanium.UI.createLabel({
	color : '#000',
	text : "Nombre:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "55%",
	left: "5%"
});

//Etiqueta para el cuadro del puntaje
var etiquetaPuntajeDetalleB = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "70%",
	left: "50%"
});

//Etiqueta indicar que es para el cuadro del puntaje
var etiquetaPuntajeB = Titanium.UI.createLabel({
	color : '#000',
	text : "Puntaje:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "70%",
	left: "5%"
});


function cargarDatosDetalleB(response){
	etiquetaNombreDetalleB.text = "" + response.participantes[0].nom;
	etiquetaIdpartDetalleB.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalleB.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalleB.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalleB.text = "" + response.participantes[0].pos;
	datosBusqueda.add(etiquetaNombreDetalleB);
	datosBusqueda.add(etiquetaIdpartDetalleB);
	datosBusqueda.add(etiquetaMatriculaDetalleB);
	datosBusqueda.add(etiquetaPuntajeDetalleB);
	datosBusqueda.add(etiquetaPosicionDetalleB);
	datosBusqueda.add(etiquetaNombreB);
	datosBusqueda.add(etiquetaIdpartB);
	datosBusqueda.add(etiquetaMatriculaB);
	datosBusqueda.add(etiquetaPuntajeB);
}
