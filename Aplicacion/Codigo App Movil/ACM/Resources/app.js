// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

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
}else{
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
//
// create base UI tab and root window
//
var menu = Titanium.UI.createWindow({
	title : 'Menu',
	navBarHidden : true,
	backgroundColor : '#fff',
	exitOnClose : true
});

var itesmAcm = Ti.UI.createImageView({
	top : "0%",
	left : "65%",
	//height: "20%",
	width : "30%",
	image : 'img/acm_mty.png'
});

var btnRanking = Ti.UI.createButton({
	backgroundImage : 'img/ranking.png',
	backgroundSelectedImage : 'img/ranking1.png',
	top : "91%",
	left : "0%",
	height : "9%",
	width : "15%"
});
btnRanking.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 1) {
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
/*var btnRanking = Ti.UI.createImageView({
 top : "90%",
 left : "0%",
 //height: "20%",
 width: "30%",
 backgroundSelectedImage: 'img/ranking1.png',
 image:'img/ranking.png'
 });*/

var btnBusqueda = Ti.UI.createButton({
	backgroundImage : 'img/busqueda.png',
	backgroundSelectedImage : 'img/busqueda1.png',
	top : "91%",
	left : "30%",
	height : "9%",
	width : "15%"
});
btnBusqueda.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 2) {
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
/*var btnBusqueda = Ti.UI.createImageView({
 top : "90%",
 left : "25%",
 //height: "20%",
 width: "30%",
 backgroundSelectedImage: 'img/busqueda1.png',
 image:'img/busqueda.png'
 });*/

var btnEstadisticas = Ti.UI.createButton({
	backgroundImage : 'img/estadisticas.png',
	backgroundSelectedImage : 'img/estadisticas1.png',
	top : "91%",
	left : "57%",
	height : "9%",
	width : "15%"
});
btnEstadisticas.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 3) {
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
/*var btnEstadisticas = Ti.UI.createImageView({
 top : "90%",
 left : "50%",
 //height: "20%",
 width: "30%",
 backgroundSelectedImage: 'img/estadisticas1.png',
 image:'img/estadisticas.png'
 });*/

var btnComparacion = Ti.UI.createButton({
	backgroundImage : 'img/comparacion.png',
	backgroundSelectedImage : 'img/comparacion1.png',
	top : "91%",
	left : "85%",
	height : "9%",
	width : "15%"
});

/*var btnComparacion = Ti.UI.createImageView({
 top : "90%",
 left : "75%",
 //height: "20%",
 width: "30%",
 backgroundSelectedImage: 'img/comparacion1.png',
 image:'img/comparacion.png'
 });*/

btnComparacion.addEventListener('click', function(e) {
	if (banP && banS) {
		if (activa != 4) {
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

function mover(left) {
	//alert (""+left+" "+a);
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
	//alert (""+left+" "+a);
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
	//alert (""+left+" "+a);
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

var fondoBarra = Ti.UI.createImageView({
	top : "90%",
	left : "0%",
	height : "10%",
	width : "100%",
	image : 'img/fondoBarra.png'
});

var select = Ti.UI.createImageView({
	top : "89.5%",
	left : "5%",
	//height: "10%",
	width : "4%",
	image : 'img/select.png'
});

//menu.add(itesmAcm);
menu.add(fondoBarra);
menu.add(btnRanking);
menu.add(btnComparacion);
menu.add(btnBusqueda);
menu.add(btnEstadisticas);
menu.add(select);
menu.open();

