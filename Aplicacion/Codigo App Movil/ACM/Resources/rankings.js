/*var tableData = [{
 title : 'Apples'
 }, {
 title : 'Bananas'
 }, {
 title : 'Carrots'
 }, {
 title : 'Potatoes'
 }];*/
var tableDataProblemas = [];
var indice = 0;
var tiempoMoverP;
var tiempoMoverE;

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

	//data : tableData
});
tablaRanking.addEventListener('click', function(e) {
	if (banP) {
		if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
			banP = false;
			toast.show();
			rankings.add(fondo);
			obtenerDetalles(e.rowData.accessibilityValue);
		} else {
			alert("No hay conexion a internet");
		}
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
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
		banP = true;
		rankings.remove(fondo);
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
	top : "10%",
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
	menu.add(datos);
	tiempoMoverP = setInterval(function() {
		moverDetalles(datos);
	}, 2);
	tiempoMoverE = setInterval(function() {
		moverBack(btnRegresarDetalles);
	}, 5);
}

function moverDetallesFuera(pantalla) {
	//alert (""+left+" "+a);
	if (pantalla.left == '100%') {
		clearInterval(tiempoMoverP);
		rankings.remove(fondo);
		rankings.remove(btnRegresarDetalles);
		menu.remove(datos);
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
				accessibilityValue : "" + (pos + 1),
				font : {
					fontSize : '25%',
					color : "#000000",
					fontFamily : 'Roboto-Condensed'
				},
				title : response.participantes[pos].pos + '  ' + response.participantes[pos].nom
			});
			var columnR1 = Ti.UI.createView({

				left : '25%',
				//accessibilityValue : "" + (pos + 1)
			});
			var label = Ti.UI.createLabel({
				text : '' + response.participantes[pos].nom,
				font : {
					fontSize : '25%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				left : 0,
				//width : 0
			});
			var columnR2 = Ti.UI.createView({
				//height : '25%',
				left : 0,
				width : '25%'
			});
			var imgPos = Ti.UI.createLabel({
				text : '' + response.participantes[pos].pos,
				font : {
					fontSize : '25%',
					color : "#000",
					fontFamily : 'Roboto-Condensed'
				},
				left : 0,
			});
			//var row1 = Ti.UI.createTableViewRow({accessibilityValue : "" + (pos + 1)});;
			/*if (response.participantes[pos].pos == 1) {
			 imgPos.image = 'img/1st_place.png';
			 }
			 if (response.participantes[pos].pos == 2) {
			 imgPos.image = 'img/2nd_place.png';
			 }
			 if (response.participantes[pos].pos == 3) {
			 imgPos.image = 'img/3rd_place.png';
			 }*/
			columnR1.add(label);
			columnR2.add(imgPos);
			//row.add(columnR2);
			//row.add(columnR1);
			//row.height = '25%';
			//alert("" + response.participantes[pos].nom);
			//seccionNombres.add(row);
			//seccionPosiciones.add(row1);
			//tableDataProblemas.push(row);
			tablaRanking.appendRow(row);
			//tableData.push(row);
		}
		//tablaRanking.data = [seccionPosiciones, seccionNombres];

	}, function(e) {
		Titanium.UI.createAlertDialog({
			title : "Error con la conexión a la base de datos",
			//message : e,
			buttonNames : ['OK']
		}).show();
	});
	//tablaRanking.setData(tableDataProblemas);
}

function cargarRankings() {
	rankings.left = "100%";
	rankings.width = "100%";
	//obtenerRanking();
	rankings.add(tablaRanking);
	rankings.add(tituloRankings);
	//llenarTabla(tableData);
}