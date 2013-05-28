//Etiqueta para el cuadro del ID del participante 1
var etiquetaTituloEstadisticas = Titanium.UI.createLabel({
	color : '#000',
	text : "Lenguajes mas utilizados",
	font : {
		fontSize : '20%',
		fontFamily : 'Roboto-Regular'
	},
	top : '14%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
});
var altura;
var tamLenguajes = new Array();
var etiquetasColores = new Array();
var etiquetasLenguajes = new Array();


//funcion que crea una grafica donde le indica al usuario que lenguajes se han usado en la competancia
//y en que porcentaje se ha usado cada uno de ellos
function crearGrafica(response) {
	altura = (parseInt(etiquetaTituloEstadisticas.top.substring(0, 3)) + 9) + (parseInt(estadisticas.height.substring(0, 3))) * .04 + 3;
	var e;
	var x = 5;
	var color1 = 30;
	var color2 = 10;
	var color3 = 90;
	var total = 0;
	for ( e = 0; e < response.lenguajes.length; e++) {
		total = total + parseInt(response.lenguajes[e].veces);
	}
	for ( e = 0; e < response.lenguajes.length; e++) {
		tamLenguajes[e] = Ti.UI.createImageView({
			top : (parseInt(etiquetaTituloEstadisticas.top.substring(0, 3)) + 8) + '%',
			left : x + "%",
			height : (parseInt(estadisticas.height.substring(0, 3))) * .04 + '%',
			width : ((parseInt(response.lenguajes[e].veces) / total) * 90) + "%",
			backgroundColor : '#' + color1 + color2 + color3
		});
		etiquetasLenguajes[e] = Titanium.UI.createLabel({
			top : altura + '%',
			font : {
				fontSize : '18%',
				fontFamily : 'Roboto-Light'
			},
			left : "14%",
			color : '#000',
			text : response.lenguajes[e].lenguaje + " : " + parseInt(((parseInt(response.lenguajes[e].veces) / total) * 100)) + "%"
		});
		etiquetasColores[e] = Ti.UI.createImageView({
			top : (altura + 1) + '%',
			left : "5%",
			height : (parseInt(estadisticas.height.substring(0, 3))) * .04 + '%',
			width : "7%",
			backgroundColor : '#' + color1 + color2 + color3
		});
		altura = altura + 8;
		color1 = (color1 + 70) % 100;
		color2 = (color2 + 50) % 100;
		color3 = (color3 + 60) % 100;
		x = x + ((parseInt(response.lenguajes[e].veces) / total) * 90);
	}
}

//funcion para obtener la estadisitca de un problema y las personas que lo han resuelto
function cargarTablaUnProblema(response) {
	var pos = 0;
	for ( pos = 0; pos < response.datos.length; pos++) {
		var row1 = Ti.UI.createTableViewRow({
		});
		var column1 = Ti.UI.createView({
			title : '' + response.datos[pos].nom_part,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
			width : "40%"
		});
		var label1 = Ti.UI.createLabel({
			text : '' + response.datos[pos].nom_part,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0
		});
		var column2 = Ti.UI.createView({
			title : '' + response.datos[pos].leng,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : '40%'
		});
		var label2 = Ti.UI.createLabel({
			text : '' + response.datos[pos].leng,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
		});
		var column3 = Ti.UI.createView({
			title : '' + response.datos[pos].fechasub,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : '60%'
		});
		var label3 = Ti.UI.createLabel({
			text : '' + response.datos[pos].fechasub,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
		});
		column1.add(label1);
		column2.add(label2);
		column3.add(label3);
		row1.add(column1);
		row1.add(column2);
		row1.add(column3);
		tablaUnProblema.appendRow(row1);
	}
	tituloProblema.text = response.datos[0].nom_prob;
}

//se crea la tabla donde se mostrara la lista de los participantes que han resuelto el problema que se selecciono
var tablaUnProblema = Titanium.UI.createTableView({
	width : '85%',
	height : '60%',
	top : '15%',
	left : '7.5%'
});

//Etiqueta que muestra el nombre del problema seleccionado
var tituloProblema = Ti.UI.createLabel({
	text : '',
	font : {
		fontSize : '20%',
		fontFamily : 'Roboto-Condensed'
	},
	color : "#000",
	top : '5%'
});

//Etiqueta que muestra el titulo de la tabla de todos los problemas de la competencia
var problemasConcurso = Ti.UI.createLabel({
	text : 'Problemas de la competencia',
	font : {
		fontSize : '20%',
		fontFamily : 'Roboto-Regular'
	},
	color : '#000'
});

function cargarDatosEstadisticas(response, tipo) {
	tablaUnProblema.setData([]);
	cargarTablaUnProblema(response);
	datosEstadisticas.add(tablaUnProblema);
	datosEstadisticas.add(tituloProblema);
}
