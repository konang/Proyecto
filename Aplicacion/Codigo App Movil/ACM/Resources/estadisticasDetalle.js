//Etiqueta para el cuadro del ID del participante 1
var etiquetaTituloEstadisticas = Titanium.UI.createLabel({
	color : '#000',
	text : "Lenguajes mas utilizados",
	font : {
		fontSize : '20%',
		fontFamily : 'Roboto-Regular'
	},
	//top : (tablaProblemas.height.substring(0, 3))+'%',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
	//width:'auto'
});
var altura;
var tamLenguajes = new Array();
var etiquetasColores = new Array();
var etiquetasLenguajes = new Array();

function crearGrafica(response) {
	etiquetaTituloEstadisticas.top = altura + "%";
	altura = altura + 24;
	var e;
	var x = 5;
	var color1 = 30;
	var color2 = 10;
	var color3 = 90;
	var total = 0;
	for ( e = 0; e < response.lenguajes.length; e++) {
		total = total + parseInt(response.lenguajes[e].veces);
	}
	//alert(datosEstadisticas.height);
	for ( e = 0; e < response.lenguajes.length; e++) {
		tamLenguajes[e] = Ti.UI.createImageView({
			top : (parseInt(etiquetaTituloEstadisticas.top.substring(0, 3))+ 6) + '%',
			left : x + "%",
			height : (parseInt(estadisticas.height.substring(0, 3)))*.1 + '%',
			width : ((parseInt(response.lenguajes[e].veces) / total) * 90) + "%",
			backgroundColor : '#' + color1 + color2 + color3
		});
		etiquetasLenguajes[e] = Titanium.UI.createLabel({
			top : (altura *(parseInt(estadisticas.height.substring(0, 3))*.01)) + "%",
			font : {
				fontSize : '18%',
				fontFamily : 'Roboto-Light'
			},
			left : "14%",
			color : '#000',
			text : response.lenguajes[e].lenguaje + " : " + ((parseInt(response.lenguajes[e].veces) / total) * 100) + "%"
		});
		etiquetasColores[e] = Ti.UI.createImageView({
			top : ((altura + 1)*(parseInt(estadisticas.height.substring(0, 3))*.01))+ "%",
			left : "5%",
			height : "7%",
			width : "7%",
			backgroundColor : '#' + color1 + color2 + color3
		});
		altura = altura + 10;
		color1 = (color1 + 70) % 100;
		color2 = (color2 + 50) % 100;
		color3 = (color3 + 60) % 100;
		x = x + ((parseInt(response.lenguajes[e].veces) / total) * 90);
	}
}

//var seccionNombresPart = Ti.UI.createTableViewSection({ headerTitle: 'Nombres' });
//var seccionLeng = Ti.UI.createTableViewSection({ headerTitle: 'Lenguaje' });
//var seccionFechas = Ti.UI.createTableViewSection({ headerTitle: 'Fechas subida' });

//funcion para obtener la estadisitca de un problema y las personas que lo han resuelto
function cargarTablaUnProblema(response) {
	var pos = 0;
	//alert(""+response.datos.length);
	for ( pos = 0; pos < response.datos.length; pos++) {
		var row1 = Ti.UI.createTableViewRow({
			//accessibilityValue : "" + response.datos[pos].idProb
		});
		var column1 = Ti.UI.createView({
			title : '' + response.datos[pos].nom_part,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left: 0
			//height: "20%",
			//accessibilityValue : "" + response.datos[pos].idProb
		});
		var label1 = Ti.UI.createLabel({
			text : '' + response.datos[pos].nom_part,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
			//width : 0
		});
		var column2 = Ti.UI.createView({
			title : '' + response.datos[pos].leng,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left: '40%'
			//height: "20%",
			//accessibilityValue : "" + response.datos[pos].idProb
		});
		var label2 = Ti.UI.createLabel({
			text : '' + response.datos[pos].leng,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
			//width : 0
		});
		var column3 = Ti.UI.createView({
			title : '' + response.datos[pos].fechasub,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left: '60%'
			//height: "20%",
			//accessibilityValue : "" + response.datos[pos].idProb
		});
		var label3 = Ti.UI.createLabel({
			text : '' + response.datos[pos].fechasub,
			font : {
				fontSize : '20%',
				color : "#000",
				fontFamily : 'Roboto-Condensed'
			},
			left : 0,
			//width : 0
		});
		//seccionNombresPart.add(row1);
		//seccionLeng.add(row2);
		//seccionFechas.add(row3);
		column1.add(label1);
		column2.add(label2);
		column3.add(label3);
		row1.add(column1);
		row1.add(column2);
		row1.add(column3);
		tablaUnProblema.appendRow(row1);
	}
	tituloProblema.text = response.datos[0].nom_prob;
	//tablaUnProblema.setData(sectionNombresPart, sectionLeng, sectionFechas);
}

//se crea la tabla donde se mostrara la lista de los participantes que han resuelto el problema que se selecciono
var tablaUnProblema = Titanium.UI.createTableView({
	//search : buscador,
	width : '85%',
	height : '60%',
	top : '15%',
	left : '7.5%',

	//data : tableData
});

//Etiqueta que muestra el nombre del problema seleccionado
var tituloProblema = Ti.UI.createLabel({
	text : '',
	font : {
		fontSize : '20%',
		color : "#000",
		fontFamily : 'Roboto-Condensed'
	},
	top : '5%'
	//left : 0,
	//width : 0
});

//Etiqueta que muestra el nombre del problema seleccionado
var finEstadisticas = Ti.UI.createLabel({
	text : 'Final',
	font : {
		fontSize : '20%',
		color : "#000",
		fontFamily : 'Roboto-Condensed'
	}
	//left : 0,
	//width : 0
});

function cargarDatosEstadisticas(response, tipo) {
	/*for (var d = datosEstadisticas.children.length - 1; d >= 0; d--) {
	 datosEstadisticas.remove(datosEstadisticas.children[d]);
	 }*/
	//if (tipo == 3) {
		tablaUnProblema.setData([]);
		cargarTablaUnProblema(response);
		datosEstadisticas.add(tablaUnProblema);
		datosEstadisticas.add(tituloProblema);
		
		
	//} else if (tipo == 2) {
		//alert("hola");
		//obtenerProblemas(response);
		//estadisticas.add(tablaProblemas);
	//}

}
