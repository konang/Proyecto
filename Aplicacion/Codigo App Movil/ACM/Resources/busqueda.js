/*#Archivo: busqueda.js
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Erick Dario Garcia Suarez
 #Fecha de creación: 18/Marzo/2013
 #Fecha de última actualización: 21/Marzo/2013
 #Descripción general: Documento para la pantalla de busqueda de participante de la aplicacion
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

var busqueda = Titanium.UI.createWindow({
    title:'Busqueda',
    backgroundColor:'#fff'
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloBusqueda = Titanium.UI.createLabel({
	color:'#000',
	text:'Busqueda de un participante',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top : "10%",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width:'auto'
});

//Etiqueta para el cuadro de buscar
var etiquetaBuscar = Titanium.UI.createLabel({
	color:'#000',
	text:'Participante',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top : "24%",
	left: "10%",
	width:'auto'
});

//Recuadro donde el usuario ingresara la matricula a buscar
var fieldBuscar = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "30%", 
  left: "10%",
  width: "75%",
  height: "12%"
});

// Boton para activar la busqueda del participante
var btnBuscar = Titanium.UI.createButton({
	title: 'Buscar',
   	top: "50%",
   	left: "10%",
   	width: "75%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "15%"
})
btnBuscar.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Buscar");
});

// Boton para regresar a la pantalla anterior
var btnRegresarB = Titanium.UI.createButton({
	title: 'Regresar',
   	top: 0,
   	left: 0,
   	width: "25%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "10%"
})
btnRegresarB.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Regresar");   
   menu.open();
   busqueda.close();
});

function cargarBusqueda(){
	busqueda.add(tituloBusqueda);
	busqueda.add(btnRegresarB);
	busqueda.add(fieldBuscar);
	busqueda.add(etiquetaBuscar);
	busqueda.add(btnBuscar);
}
