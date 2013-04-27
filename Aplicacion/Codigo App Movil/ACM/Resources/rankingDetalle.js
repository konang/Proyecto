//Etiqueta para el cuadro del ID
var etiquetaPosicionDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "40%",
		fontFamily : 'Roboto-Regular'
	},
	top : "5%",
	//left: "45%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del ID
var etiquetaPosicion = Titanium.UI.createLabel({
	color : '#000',
	text : "Posicion:",
	font : {
		fontSize : "40%",
		fontFamily : 'Roboto'
	},
	top : "5%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del Id del participante con el sistema
var etiquetaIdpartDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "20%",
	left: "50%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del Id del participante con el sistema
var etiquetaIdpart = Titanium.UI.createLabel({
	color : '#000',
	text : "Id part:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "20%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre
var etiquetaMatriculaDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "30%",
	left: "50%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaMatricula = Titanium.UI.createLabel({
	color : '#000',
	text : "Matricula:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "30%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre
var etiquetaNombreDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left: "50%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaNombre = Titanium.UI.createLabel({
	color : '#000',
	text : "Nombre:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "40%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre
var etiquetaPuntajeDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "50%",
	left: "50%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaPuntaje = Titanium.UI.createLabel({
	color : '#000',
	text : "Puntaje:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "50%",
	left: "5%",
	//width:'auto'
});

//Etiqueta para el cuadro del nombre
var etiquetaIdDetalle = Titanium.UI.createLabel({
	color : '#000',
	text : "",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "60%",
	left: "50%",
	//width:'auto'
});

//Etiqueta indicar que es para el cuadro del nombre
var etiquetaId = Titanium.UI.createLabel({
	color : '#000',
	text : "ID:",
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Light'
	},
	top : "60%",
	left: "5%",
	//width:'auto'
});


function cargarDatosDetalle(response){
	etiquetaNombreDetalle.text = "" + response.participantes[0].nom;
	etiquetaIdDetalle.text = "" + response.participantes[0].id;
	etiquetaIdpartDetalle.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalle.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalle.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalle.text = "" + response.participantes[0].pos;
	datos.add(etiquetaNombreDetalle);
	datos.add(etiquetaIdDetalle);
	datos.add(etiquetaIdpartDetalle);
	datos.add(etiquetaMatriculaDetalle);
	datos.add(etiquetaPuntajeDetalle);
	datos.add(etiquetaPosicionDetalle);
	datos.add(etiquetaNombre);
	datos.add(etiquetaId);
	datos.add(etiquetaIdpart);
	datos.add(etiquetaMatricula);
	datos.add(etiquetaPuntaje);
	//datos.add(etiquetaPosicion);
}
