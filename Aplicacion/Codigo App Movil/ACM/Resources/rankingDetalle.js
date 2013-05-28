//Etiqueta para el cuadro de la posicion
var etiquetaPosicionDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "40%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%"
});

//Etiqueta indicar que es para el cuadro de la posicion
var etiquetaPosicion = Titanium.UI.createLabel({
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
var etiquetaIdpartDetalle = Titanium.UI.createLabel({
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
var etiquetaIdpart = Titanium.UI.createLabel({
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
var etiquetaMatriculaDetalle = Titanium.UI.createLabel({
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
var etiquetaMatricula = Titanium.UI.createLabel({
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
var etiquetaNombreDetalle = Titanium.UI.createLabel({
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
var etiquetaNombre = Titanium.UI.createLabel({
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
var etiquetaPuntajeDetalle = Titanium.UI.createLabel({
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
var etiquetaPuntaje = Titanium.UI.createLabel({
	color : '#000',
	text : "Puntaje:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "70%",
	left: "5%"
});



function cargarDatosDetalle(response){
	etiquetaNombreDetalle.text = "" + response.participantes[0].nom;
	etiquetaIdpartDetalle.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalle.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalle.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalle.text = "" + response.participantes[0].pos;
	datos.add(etiquetaNombreDetalle);
	datos.add(etiquetaIdpartDetalle);
	datos.add(etiquetaMatriculaDetalle);
	datos.add(etiquetaPuntajeDetalle);
	datos.add(etiquetaPosicionDetalle);
	datos.add(etiquetaNombre);
	datos.add(etiquetaIdpart);
	datos.add(etiquetaMatricula);
	datos.add(etiquetaPuntaje);
}
