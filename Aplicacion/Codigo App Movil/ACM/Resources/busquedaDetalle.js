//Etiqueta para el cuadro del ID
var etiquetaPosicionDetalleB = Titanium.UI.createLabel({
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
var etiquetaPosicionB = Titanium.UI.createLabel({
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
var etiquetaIdpartDetalleB = Titanium.UI.createLabel({
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
var etiquetaIdpartB = Titanium.UI.createLabel({
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
var etiquetaMatriculaDetalleB = Titanium.UI.createLabel({
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
var etiquetaMatriculaB = Titanium.UI.createLabel({
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
var etiquetaNombreDetalleB = Titanium.UI.createLabel({
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
var etiquetaNombreB = Titanium.UI.createLabel({
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
var etiquetaPuntajeDetalleB = Titanium.UI.createLabel({
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
var etiquetaPuntajeB = Titanium.UI.createLabel({
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
var etiquetaIdDetalleB = Titanium.UI.createLabel({
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
var etiquetaIdB = Titanium.UI.createLabel({
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


function cargarDatosDetalleB(response){
	etiquetaNombreDetalleB.text = "" + response.participantes[0].nom;
	etiquetaIdDetalleB.text = "" + response.participantes[0].id;
	etiquetaIdpartDetalleB.text = "" + response.participantes[0].idPart;
	etiquetaMatriculaDetalleB.text = "" + response.participantes[0].mat;
	etiquetaPuntajeDetalleB.text = "" + response.participantes[0].puntaje;
	etiquetaPosicionDetalleB.text = "" + response.participantes[0].pos;
	datosBusqueda.add(etiquetaNombreDetalleB);
	datosBusqueda.add(etiquetaIdDetalleB);
	datosBusqueda.add(etiquetaIdpartDetalleB);
	datosBusqueda.add(etiquetaMatriculaDetalleB);
	datosBusqueda.add(etiquetaPuntajeDetalleB);
	datosBusqueda.add(etiquetaPosicionDetalleB);
	datosBusqueda.add(etiquetaNombreB);
	datosBusqueda.add(etiquetaIdB);
	datosBusqueda.add(etiquetaIdpartB);
	datosBusqueda.add(etiquetaMatriculaB);
	datosBusqueda.add(etiquetaPuntajeB);
	//datos.add(etiquetaPosicion);
}
