/*var tableData = [{
 title : 'Apples'
 }, {
 title : 'Bananas'
 }, {
 title : 'Carrots'
 }, {
 title : 'Potatoes'
 }];*/
var tableData = [];
var indice = 0;
var tiempoMoverP;
var tiempoMoverE;
var tabla = new Array();

var rankings = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "90%",
	top : 0
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloRankings = Titanium.UI.createLabel({
	color : '#000',
	text : 'Ranking',
	font : {
		fontSize : "25%",
		fontFamily : 'Roboto-Medium'
	},
	top : "7%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	//width:'auto'
});

function llenarTabla(tableData) {
	for ( indice = 1; indice <= tableData.length; indice++) {
		var posY = (indice * 10) + 7;
		tabla[indice - 1] = Ti.UI.createButton({
			title : tableData[indice - 1],
			top : "" + posY + "%",
			left : "7.5%",
			color : "#fff",
			height : "12%",
			width : "85%"
		});
		if (indice % 2 == 0) {
			tabla[indice - 1].backgroundImage = 'img/tablaP.png';
			tabla[indice - 1].backgroundSelectedImage = 'img/tablaPS.png';
		} else {
			tabla[indice - 1].backgroundImage = 'img/tablaI.png';
			tabla[indice - 1].backgroundSelectedImage = 'img/tablaIS.png';
		}
		rankings.add(tabla[indice - 1]);
	}
}

//Barra de busqueda de competidores
var buscador = Titanium.UI.createSearchBar({
	barColor : '#fff',
	height : "30%",
	//showCancel : true,
	top : 0,
	//borderRadius: 10,
	//hintText: "Busca a alguien"
});

//se crea la tabla donde se mostrara el ranking actual del concurso
var tablaRanking = Titanium.UI.createTableView({
	//search : buscador,
	width : "85%",
	height : "75%",
	top : "15%",
	left : "7.5%",

	data : tableData
});
tablaRanking.addEventListener('click', function(e) {
	if (banP) {
		rankings.add(fondo);
		obtenerDetalles(e.rowData.accessibilityValue);
	}
	//alert("" + e.rowData.accessibilityValue);
});

function obtenerDetalles(dato) {
	//tablaRanking.setData([]);
	rankingDetallePhp.getDetallePhp(dato, function(response) {
		//getting an item out of the json response
		var pos = 0;
		//alert("" + response.participantes[0].nom);
		despliegaDetalles(response);

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "API call failed",
			message : e,
			buttonNames : ['OK']
		}).show();
	});
}

var fondo = Titanium.UI.createView({
	backgroundColor : '#000',
	opacity : 0.5,
	height : "100%",
	top : 0
});

var datos = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "70%",
	top : "20%",
	left : "100%"
})
datos.addEventListener('swipe', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverP = setInterval(function() {
		moverDetallesFuera(datos);
	}, 2);
	tiempoMoverE = setInterval(function() {
		moverBackFuera(btnRegresarDetalles);
	}, 5);
});

// Boton para regresar a la pantalla anterior
var btnRegresarDetalles = Titanium.UI.createButton({
	//title: 'Regresar',
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "images/back.png",
	backgroundImage : "images/back1.png"
})
btnRegresarDetalles.addEventListener('click', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverP = setInterval(function() {
		moverDetallesFuera(datos);
	}, 2);
	tiempoMoverE = setInterval(function() {
		moverBackFuera(btnRegresarDetalles);
	}, 5);
});

function despliegaDetalles(response) {

	
	rankings.add(btnRegresarDetalles);
	cargarDatosDetalle(response);
	rankings.add(datos);
	banP = false;
	tiempoMoverP = setInterval(function() {
		moverDetalles(datos);
	}, 2);
	tiempoMoverE = setInterval(function() {
		moverBack(btnRegresarDetalles);
	}, 5);
}

function moverDetallesFuera(pantalla) {
	//alert (""+left+" "+a);
	if (pantalla.left == "100%") {
		clearInterval(tiempoMoverP);
		rankings.remove(fondo);
		rankings.remove(btnRegresarDetalles);
		rankings.remove(datos);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance + 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBackFuera(elemento) {
	//alert (""+left+" "+a);
	if (elemento.left == "-15%") {
		clearInterval(tiempoMoverE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		//alert("" + avance);
		avance = avance - 1;
		elemento.left = "" + avance + "%";
	}
}

function moverDetalles(pantalla) {
	//alert (""+left+" "+a);
	if (pantalla.left == "0%") {
		clearInterval(tiempoMoverP);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBack(elemento) {
	//alert (""+left+" "+a);
	if (elemento.left == "0%") {
		clearInterval(tiempoMoverE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		//alert("" + avance);
		avance = avance + 1;
		elemento.left = "" + avance + "%";
	}
}

function obtenerRanking() {
	//tablaRanking.setData([]);
	ranking.getRanking(function(response) {
		//getting an item out of the json response
		var pos = 0;
		//alert(""+response.participantes.length);
		for ( pos = 0; pos < response.participantes.length; pos++) {
			var row = Ti.UI.createTableViewRow({
				title : '' + response.participantes[pos].nom,
				font : {
					fontSize : "25%",
					color: "#000",
					fontFamily : 'Roboto-Thin'
				},
				accessibilityValue : "" + (pos + 1)
			});
			//alert("" + response.participantes[pos].nom);
			tablaRanking.appendRow(row);
			//tableData.push(row);
		}

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "API call failed",
			message : e,
			buttonNames : ['OK']
		}).show();
	});
}

function cargarRankings() {
	rankings.add(tituloRankings);
	rankings.left = "100%";
	rankings.width = "100%";
	//obtenerRanking();
	rankings.add(tablaRanking);
	//llenarTabla(tableData);
}