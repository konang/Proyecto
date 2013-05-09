var tiempoMoverEstadisticasP;
var tiempoMoverEstadisticasE;

var estadisticas = Ti.UI.createScrollView({
	backgroundColor : '#fff',
	height : "87%",
	//contentWidth: 'auto',
	contentHeight : 'auto',
	top : 0
});

var estadisticas2 = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : '90%'
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

//Vista que ocurece el fondo mientras se despliegan los datos de las estadisticas
var fondoEstadisticas = Titanium.UI.createView({
	backgroundColor : '#000',
	opacity : 0.5,
	height : "100%",
	top : 0
});

//Vista donde se despliegan los datos de la estadistica seleccionada
var datosEstadisticas = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "70%",
	top : "15%",
	width : "100%",
	left : "100%"
})
datosEstadisticas.addEventListener('swipe', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	/*tiempoMoverEstadisticasP = setInterval(function() {
	 moverEstadisticasFuera(datosEstadisticas);
	 }, 2);
	 tiempoMoverEstadisticasE = setInterval(function() {
	 moverBackEstadisticasFuera(btnRegresarEstadisticas);
	 }, 5);*/
});

// Boton para regresar a la pantalla anterior
var btnRegresarEstadisticas = Titanium.UI.createButton({
	//title: 'Regresar',
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "images/back.png",
	backgroundImage : "images/back1.png"
})
btnRegresarEstadisticas.addEventListener('click', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverEstadisticasP = setInterval(function() {
		moverEstadisticasFuera(datosEstadisticas);
	}, 2);
	tiempoMoverEstadisticasE = setInterval(function() {
		moverBackEstadisticasFuera(btnRegresarEstadisticas);
	}, 5);
});

function despliegaDetallesEstadisticas(response, tipo) {
	cargarDatosEstadisticas(response, tipo);
	menu.add(datosEstadisticas);
	menu.add(btnRegresarEstadisticas);
	tiempoMoverEstadisticasP = setInterval(function() {
		moverEstadisticas(datosEstadisticas);
	}, 2);
	tiempoMoverEstadisticasE = setInterval(function() {
		moverBackEstadisticas(btnRegresarEstadisticas);
	}, 5);
}

//funcion para mover la pantalla emergente de los detalles de la busqueda hacia fuera de la pantalla
function moverEstadisticasFuera(pantalla) {
	if (pantalla.left == "100%") {
		clearInterval(tiempoMoverEstadisticasP);
		menu.remove(fondoEstadisticas);
		menu.remove(btnRegresarEstadisticas);
		menu.remove(datosEstadisticas);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance + 1;
		pantalla.left = "" + avance + "%";
	}
}

//funcion para mover el boton de regresar emergente de los detalles de la comparacion hacia fuera de la pantalla
function moverBackEstadisticasFuera(elemento) {
	if (elemento.left == "-15%") {
		clearInterval(tiempoMoverEstadisticasE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance - 1;
		elemento.left = "" + avance + "%";
	}
}

function moverEstadisticas(pantalla) {
	if (pantalla.left == "0%") {
		clearInterval(tiempoMoverEstadisticasP);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBackEstadisticas(elemento) {
	if (elemento.left == "0%") {
		clearInterval(tiempoMoverEstadisticasE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		//alert("" + avance);
		avance = avance + 1;
		elemento.left = "" + avance + "%";
	}
}

//funcion para obtener la estadisitca de los lenguajes mas utilizados
function busquedaLenguajes() {
	estadisticasDetallePhp.getEstadisticasPhp(1, "utilizado", function(response) {

		//cargarDatosEstadisticas(response, 1);
		crearGrafica(response);
		estadisticas.add(finEstadisticas);
		for ( e = 0; e < response.lenguajes.length; e++) {
			estadisticas.add(tamLenguajes[e]);
			estadisticas.add(etiquetasLenguajes[e]);
			estadisticas.add(etiquetasColores[e]);
		}
		finEstadisticas.top = altura + 35 + "%";
		estadisticas.add(etiquetaTituloEstadisticas);

		//alert("" + response.lenguajes[0].lenguaje);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
	});
}

//se crea la tabla donde se mostrara la lista de los problemas actuales
var tablaProblemas = Titanium.UI.createTableView({
	//search : buscador,
	width : '85%',
	height : '60%',
	top : '15%',
	left : '7.5%',

	//data : tableData
});
tablaProblemas.addEventListener('click', function(e) {
	if (banP) {
		if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
			toast.show();
			menu.add(fondoEstadisticas);
			banP = false;
			obtenerDetallesProblemas(e.rowData.accessibilityValue);
		} else {
			alert("No hay conexion a internet");
		}
	}
	//alert("" + e.rowData.accessibilityValue);
});

function obtenerDetallesProblemas(dato) {
	//tablaRanking.setData([]);
	//alert(dato);
	estadisticasDetallePhp.getEstadisticasPhp(dato, "un_problema", function(response) {
		//getting an item out of the json response
		var pos = 0;
		//alert("" + response.participantes[0].nom);
		despliegaDetallesEstadisticas(response, 3);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
		banP = true;
		estadisticas.remove(fondo);
	});
}

//var seccionNombres = Ti.UI.createTableViewSection({ headerTitle: 'Nombres' });
//var seccionNumeros = Ti.UI.createTableViewSection({ headerTitle: 'Numeros' });
//funcion para obtener la estadisitca de los problemas que hay en el concurso
function estadisticasProblemas() {
	estadisticasDetallePhp.getEstadisticasPhp(1, "problemas", function(response) {
		var pos = 0;

		for ( pos = 0; pos < response.datos.length; pos++) {
			//alert(""+response.datos[pos].idProb);
			var row1 = Ti.UI.createTableViewRow({
				accessibilityValue : "" + response.datos[pos].idProb
			});
			var columnE1 = Ti.UI.createView({
				title : '' + response.datos[pos].nom_prob,
				font : {
					fontSize : '20%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				//height: "20%",
			});
			var label1 = Ti.UI.createLabel({
				text : '' + response.datos[pos].nom_prob,
				font : {
					fontSize : '23%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				left : 0,
				//width : 0
			});
			var columnE2 = Ti.UI.createView({
				title : '' + response.datos[pos].Numero_resueltos,
				font : {
					fontSize : '20%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				left : "80%",
			});
			var label2 = Ti.UI.createLabel({
				text : '' + response.datos[pos].Numero_Resueltos,
				font : {
					fontSize : '27%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				left : 0,
				//width : 0
			});
			columnE1.add(label1);
			columnE2.add(label2);
			row1.add(columnE1);
			row1.add(columnE2);
			//row1.add(columnE2);
			//seccionNombres.add(row1);
			//seccionNumeros.add(row2);
			tablaProblemas.appendRow(row1);
		}
		altura = parseFloat(tablaProblemas.height.substring(0, 3)) - 10;
		//alert(tablaProblemas.height.substring(0, 3));
		//alert(altura);
		busquedaLenguajes();
		//tablaProblemas.setData(seccionNombres, seccionNumeros);
		//alert("" + response.lenguajes[0].lenguaje);
	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
	});
}

var scrollableEstadisticas = Ti.UI.createScrollView({
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
	contentWidth : 'auto',
	contentHeight : 'auto',
	height : "90%",
	top : 0
});

function cargarEstadisticas() {
	estadisticas.add(tituloEstadisticas);
	estadisticas.add(tablaProblemas);

	tablaProblemas.top = "17%";
	scrollableEstadisticas.left = "100%";
	estadisticas.left = "100%";
	scrollableEstadisticas.width = "100%";
	estadisticas.width = "100%";
	scrollableEstadisticas.add(estadisticas);
}

