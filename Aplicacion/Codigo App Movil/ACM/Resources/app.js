// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


//seccion donde se cargan todos los archivos de codigo a utilizar por la aplicaciones
Ti.include("busqueda.js");
Ti.include("estadisticas.js");
Ti.include("comparacion.js");
Ti.include("rankings.js");
Ti.include("basedatos.js");
Ti.include("busquedaPhp.js");
Ti.include("comparacionPhp.js");
Ti.include("rankingDetallePhp.js");
Ti.include("estadisticasDetallePhp.js");
Ti.include("rankingDetalle.js");
Ti.include("comparacionDetalle.js");
Ti.include("busquedaDetalle.js");
Ti.include("estadisticasDetalle.js");
if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE) {
	estadisticasProblemas();
	obtenerRanking();
} else {
	alert("No hay conexion a internet");
}

var toast = Ti.UI.createNotification({
	message : "Cargando ...",
	duration : Ti.UI.NOTIFICATION_DURATION_LONG
});

var tiempoMover;
var a = 0;
var tiempoPantallaE;
var tiempoPantallaS;
var activa = 0;
var banP = true;
var banS = true;
var tiempoMoverAboutP;
var tiempoMoverAboutE;
var inicio = true;

var mensajeBack = Ti.UI.createAlertDialog();

mensajeBack.message = 'Salir de la aplicación?';
mensajeBack.buttonNames = ['Si', 'No'];
mensajeBack.cancel = 1;

mensajeBack.addEventListener('click', function(e) {
	if (e.index == 0) {
		menu.close();
	}
});

//
// create base UI tab and root window
//
var menu = Titanium.UI.createWindow({
	title : 'Menu',
	navBarHidden : true,
	backgroundColor : '#fff',
	exitOnClose : true
});
menu.addEventListener('android:back', function(e) {
	mensajeBack.show();
	return false;
});
var activity = menu.activity;
activity.onCreateOptionsMenu = function(e) {
	var menuOpciones = e.menu;
	var menuItem = menuOpciones.add({
		title : "Acerca de..",
		icon : "img/about.png",
		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
	});
	menuItem.addEventListener("click", function(e) {
		if (banP) {
			banP = false;
			menu.add(fondoAbout);
			despliegaDetallesAbout();
		}
	});
};

//Vista que ocurece el fondo mientras se despliegan el about
var fondoAbout = Titanium.UI.createView({
	backgroundColor : '#000',
	opacity : 0.5,
	height : "100%",
	top : 0
});

//Vista donde se despliegan los datos del About
var datosAbout = Titanium.UI.createView({
	backgroundColor : '#fff',
	height : "70%",
	top : "15%",
	width : "100%",
	left : "100%"
})
datosAbout.addEventListener('swipe', function(e) {
	tiempoMoverAboutP = setInterval(function() {
		moverAboutFuera(datosAbout);
	}, 2);
	tiempoMoverAboutE = setInterval(function() {
		moverBackAboutFuera(btnRegresarAbout);
	}, 5);
});

// Boton para regresar a la pantalla anterior
var btnRegresarAbout = Titanium.UI.createButton({
	top : 0,
	left : "-15%",
	width : "15%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	height : "10%",
	backgroundSelectedImage : "img/back.png",
	backgroundImage : "img/back1.png"
})
btnRegresarAbout.addEventListener('click', function(e) {
	//Titanium.API.info("You clicked the button Regresar");
	tiempoMoverAboutP = setInterval(function() {
		moverAboutFuera(datosAbout);
	}, 2);
	tiempoMoverAboutE = setInterval(function() {
		moverBackAboutFuera(btnRegresarAbout);
	}, 5);
});

//funcion que despliega los elementos del about de la aplicacion
function despliegaDetallesAbout() {
	menu.add(datosAbout);
	datosAbout.add(infoAbout);
	datosAbout.add(imgTec);
	menu.add(btnRegresarAbout);
	tiempoMoverAboutP = setInterval(function() {
		moverAbout(datosAbout);
	}, 2);
	tiempoMoverAboutE = setInterval(function() {
		moverBackAbout(btnRegresarAbout);
	}, 5);
}

//funcion para mover la pantalla emergente de los detalles del About hacia fuera de la pantalla
function moverAboutFuera(pantalla) {
	if (pantalla.left == "100%") {
		clearInterval(tiempoMoverAboutP);
		menu.remove(fondoAbout);
		menu.remove(btnRegresarAbout);
		menu.remove(datosAbout);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance + 1;
		pantalla.left = "" + avance + "%";
	}
}

//funcion para mover el boton de regresar emergente de los detalles del About hacia fuera de la pantalla
function moverBackAboutFuera(elemento) {
	if (elemento.left == "-15%") {
		clearInterval(tiempoMoverAboutE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance - 1;
		elemento.left = "" + avance + "%";
	}
}

function moverAbout(pantalla) {
	if (pantalla.left == "0%") {
		clearInterval(tiempoMoverAboutP);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverBackAbout(elemento) {
	if (elemento.left == "0%") {
		clearInterval(tiempoMoverAboutE);
	} else {
		var avance = parseFloat(elemento.left.substring(0, 4));
		avance = avance + 1;
		elemento.left = "" + avance + "%";
	}
}

//Imagen del Tec
var imgTec = Ti.UI.createImageView({
	left : "74%",
	top : "79%",
	width : "30%",
	image : 'img/itesm.png'
});

//Etiqueta que contiene el texto del About en general
var infoAbout = Titanium.UI.createLabel({
	color : '#000',
	text : 'Esta es una aplicacion donde se muestran las estadisticas de un evento que convoca a todos los programadores del Tecnológico de Monterrey a resolver una serie de problemas a lo largo del semestre para encontrar a aquellos más destacados.',
	font : {
		fontSize : "20%",
		fontFamily : 'Roboto-Light'
	},
	top : "10%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});

//Etiqueta del boton de ranking del dock
var etiquetaRanking = Titanium.UI.createLabel({
	color : '#fff',
	text : 'Ranking',
	font : {
		fontSize : "7%",
		fontFamily : 'Roboto-Thin'
	},
	top : "98%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	left : '3.5%'
});

var btnRanking = Ti.UI.createButton({
	backgroundImage : 'img/ranking2.png',
	backgroundSelectedImage : 'img/ranking3.png',
	top : "91%",
	left : "0%",
	height : "9%",
	width : "15%"
});
btnRanking.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 1) {
			if(inicio){
				menu.remove(etiquetaExplicacion);
				menu.remove(flecha);
				inicio = false;
			}
			banP = false;
			banS = false;
			var left = parseFloat(btnRanking.left.substring(0, 4));
			tiempoMover = setInterval(function() {
				mover(left + 5)
			}, 7);
			cargarRankings();
			menu.add(rankings);
			if (activa == 2) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(busqueda, 2)
				}, 2);
			} else if (activa == 3) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(estadisticas, 3)
				}, 2);
			} else if (activa == 4) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(comparacion, 4)
				}, 2);
			}
			activa = 1;
			tiempoPantallaE = setInterval(function() {
				moverPantallaE(rankings)
			}, 2);
		}
	}

});

//Etiqueta del boton de busqueda del dock
var etiquetaBusqueda = Titanium.UI.createLabel({
	color : '#fff',
	text : 'Búsqueda',
	font : {
		fontSize : "7%",
		fontFamily : 'Roboto-Thin'
	},
	top : "98%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	left : '33%'
});

var btnBusqueda = Ti.UI.createButton({
	backgroundImage : 'img/busqueda2.png',
	backgroundSelectedImage : 'img/busqueda3.png',
	top : "91%",
	left : "30%",
	height : "9%",
	width : "15%"
});
btnBusqueda.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 2) {
			if(inicio){
				menu.remove(etiquetaExplicacion);
				menu.remove(flecha);
				inicio = false;
			}
			banP = false;
			banS = false;
			var left = parseFloat(btnBusqueda.left.substring(0, 4));
			tiempoMover = setInterval(function() {
				mover(left + 5)
			}, 7);
			cargarBusqueda();
			menu.add(busqueda);
			if (activa == 4) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(comparacion, 4)
				}, 2);
			} else if (activa == 3) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(estadisticas, 3)
				}, 2);
			} else if (activa == 1) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(rankings, 1)
				}, 2);
			}
			activa = 2;
			tiempoPantallaE = setInterval(function() {
				moverPantallaE(busqueda)
			}, 2);
		}
	}
});

//Etiqueta del boton de estadisticas del dock
var etiquetaEstadisticas = Titanium.UI.createLabel({
	color : '#fff',
	text : 'Estadísticas',
	font : {
		fontSize : "7%",
		fontFamily : 'Roboto-Thin'
	},
	top : "98%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	left : '59%'
});

var btnEstadisticas = Ti.UI.createButton({
	backgroundImage : 'img/estadisticas.png',
	backgroundSelectedImage : 'img/estadisticas1.png',
	top : "91%",
	left : "57%",
	height : "8%",
	width : "15%"
});
btnEstadisticas.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 3) {
			if(inicio){
				menu.remove(etiquetaExplicacion);
				menu.remove(flecha);
				inicio = false;
			}
			banP = false;
			banS = false;
			var left = parseFloat(btnEstadisticas.left.substring(0, 4));
			tiempoMover = setInterval(function() {
				mover(left + 5)
			}, 7);
			cargarEstadisticas();
			menu.add(estadisticas);
			if (activa == 2) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(busqueda, 2)
				}, 2);
			} else if (activa == 1) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(rankings, 1)
				}, 2);
			} else if (activa == 4) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(comparacion, 4)
				}, 2);
			}
			activa = 3;
			tiempoPantallaE = setInterval(function() {
				moverPantallaE(estadisticas)
			}, 2);
		}
	}
});

//Etiqueta del boton de comparacion del dock
var etiquetaComparacion = Titanium.UI.createLabel({
	color : '#fff',
	text : 'Comparación',
	font : {
		fontSize : "7%",
		fontFamily : 'Roboto-Thin'
	},
	top : "98%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	left : '86.5%'
});

var btnComparacion = Ti.UI.createButton({
	backgroundImage : 'img/comparacion2.png',
	backgroundSelectedImage : 'img/comparacion3.png',
	top : "91%",
	left : "85%",
	height : "9%",
	width : "15%"
});
btnComparacion.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 4) {
			if(inicio){
				menu.remove(etiquetaExplicacion);
				menu.remove(flecha);
				inicio = false;
			}
			banP = false;
			banS = false;
			var left = parseFloat(btnComparacion.left.substring(0, 4));
			tiempoMover = setInterval(function() {
				mover(left + 5)
			}, 7);
			cargarComparacion();
			menu.add(comparacion);
			if (activa == 2) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(busqueda, 2)
				}, 2);
			} else if (activa == 3) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(estadisticas, 3)
				}, 2);
			} else if (activa == 1) {
				tiempoPantallaS = setInterval(function() {
					moverPantallaS(rankings, 1)
				}, 2);
			}
			activa = 4;
			tiempoPantallaE = setInterval(function() {
				moverPantallaE(comparacion)
			}, 2);
		}
	}
});


//Funcion que mueve la flecha que indica en que pagina se encuentra el usuario
function mover(left) {
	if (a >= (left - 1) && a <= (left + 1)) {
		clearInterval(tiempoMover);
		banS = true;
	} else {
		var avance = parseFloat(select.left.substring(0, 4));
		if (avance > left) {
			avance = avance - 1;
		} else {
			avance = avance + 1;
		}
		select.left = "" + avance + "%";
		a = avance;
	}
}

function moverPantallaE(pantalla) {
	if (pantalla.left == "0%") {
		clearInterval(tiempoPantallaE);
		banP = true;
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

function moverPantallaS(pantalla, n) {
	if (pantalla.left == "-100%") {
		if (n == 2) {
			menu.remove(busqueda);
		} else if (n == 3) {
			menu.remove(estadisticas);
		} else if (n == 1) {
			menu.remove(rankings);
		} else if (n == 4) {
			menu.remove(comparacion);
		}
		clearInterval(tiempoPantallaS);
	} else {
		var avance = parseFloat(pantalla.left.substring(0, 4));
		avance = avance - 1;
		pantalla.left = "" + avance + "%";
	}
}

//Etiqueta donde se le da una breve introduccion al usuario
var etiquetaExplicacion = Titanium.UI.createLabel({
	color : '#000',
	text : 'Presiona cualquiera de las opciones de abajo...',
	font : {
		fontSize : "20%",
		fontFamily : 'Roboto-Light'
	},
	top : "34%",
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	left : '33%'
});

//IFlecha roja que se carga al inicio de la aplicacion para indicaciones al usuario
var flecha = Ti.UI.createImageView({
	top : "46.5%",
	left : "50%",
	//height: "10%",
	width : "30%",
	image : 'img/flecha.png'
});

//Fondo de la barra de opciones de la parte de abajo
var fondoBarra = Ti.UI.createImageView({
	top : "90%",
	left : "0%",
	height : "10%",
	width : "100%",
	backgroundColor : '#333333',
});

//Imagen que indica la pagina en donde se encuentra el usuario
var select = Ti.UI.createImageView({
	top : "89.5%",
	left : "5%",
	width : "5%",
	image : 'img/select.png'
});

menu.add(fondoBarra);
menu.add(btnRanking);
menu.add(flecha);
menu.add(etiquetaExplicacion);
menu.add(btnComparacion);
menu.add(btnBusqueda);
menu.add(btnEstadisticas);
menu.add(etiquetaRanking);
menu.add(etiquetaComparacion);
menu.add(etiquetaBusqueda);
menu.add(etiquetaEstadisticas);
menu.add(select);
menu.open();

