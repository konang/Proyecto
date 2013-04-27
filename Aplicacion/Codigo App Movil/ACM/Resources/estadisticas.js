var estadisticas = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : 0
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloEstadisticas = Titanium.UI.createLabel({
	color : '#000',
	text : 'Estadisticas',
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Medium'
	},
	top : "10%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//width:'auto'
});

function cargarEstadisticas() {
	estadisticas.add(tituloEstadisticas);
	estadisticas.left = "100%";
	estadisticas.width = "100%";
}

