/*#Archivo: app.js
#Proyecto: Aplicación Móvil para plataforma Android Training Assistant
#Autor(es): Erick Dario Garcia Suarez
#Fecha de creación: 18/Marzo/2013
#Fecha de última actualización: 21/Marzo/2013
#Descripción general: Documento para la pantalla principal de la aplicacion
#Nombre de la institución para cuando el código es propietario. Todos los derechos reservados.
#This file is part of Aplicación Móvil para plataforma Android Training Assistant.
#Aplicación Móvil para plataforma Android Training Assistant is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#(at your option) any later version.

# Aplicación Móvil para plataforma Android Training Assistant
# is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with Aplicación Móvil para plataforma Android Training Assistant.
# If not, see <http://www.gnu.org/licenses/>.*/

Ti.include("rankings.js");
Ti.include("estadisticas.js");
Ti.include("comparacion.js");
Ti.include("busqueda.js");
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var menu = Titanium.UI.createWindow({  
    title:'Menu',
	navBarHidden:true,
    backgroundColor:'#fff',
    exitOnClose: true
});


// Boton para acceder a la pantalla de Rankings generales
var btnRankings = Titanium.UI.createButton({
	title: 'Rankings',
   	top: "10%",
   	width: "40%",
   	left: "55%",
   	backgroundImage: "images/ranking1.png",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "30%"
})
btnRankings.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button R");
   cargarRankings();
   menu.add(rankings);
   //rankings.open();
   //menu.close();
});

//Boton para acceder a las estadisticas del concurso
var btnEstadisticas = Titanium.UI.createButton({
	title: 'Estadisticas',
   	top: "10%",
   	width: "48%",
   	left: "5%",
   	backgroundImage: "images/estadisticas1.png",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "27%"
})
btnEstadisticas.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button E");
   cargarEstadisticas();
   menu.add(estadisticas);
   //estadisticas.open();
   //menu.close();
});



//Boton para acceder a la pantalla donde se compara el desempeño de 2 participantes
var btnComparacion = Titanium.UI.createButton({
	title: 'Comparacion de 2 participantes',
   	top: "40%",
   	width: "48%",
   	left: "50%",
   	backgroundImage: "images/comparacion1.png",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "30%"
})
btnComparacion.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button C");
   cargarComparacion();
   menu.add(comparacion);
   //menu.close();
});



//Boton para acceder a la opcion  de busqueda de un participante
var btnBusqueda = Titanium.UI.createButton({
	title: 'Busqueda de un participante',
   	top: "40%",
   	left: "5%",
   	width: "37%",
   	backgroundImage: "images/busqueda1.png",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "30%"
})
btnBusqueda.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button B");
   cargarBusqueda();
   menu.add(busqueda);
   //busqueda.open();
   //menu.close();
});

//Imagen que aparece de fondo en la pantalla
var logoTec = Ti.UI.createImageView({
	top : "77%",
	left : "0%",
	height: "20%",
	width: "27%",
  	image:'images/tec_mty.png'
});

var itesmAcm = Ti.UI.createImageView({
	top : "83%",
	left : "65%",
	height: "20%",
	width: "30%",
  	image:'images/acm_mty.png'
});

menu.add(logoTec);
menu.add(itesmAcm);
menu.add(btnRankings);
menu.add(btnEstadisticas);
menu.add(btnComparacion);
menu.add(btnBusqueda);
menu.open();

