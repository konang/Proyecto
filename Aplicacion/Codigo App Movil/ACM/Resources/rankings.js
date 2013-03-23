/*#Archivo: rankings.js
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Erick Dario Garcia Suarez
 #Fecha de creación: 18/Marzo/2013
 #Fecha de última actualización: 21/Marzo/2013
 #Descripción general: Documento para la pantalla de rankings de la aplicacion
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

var rankings = Titanium.UI.createWindow({
    title:'Rankings',
    backgroundColor:'#fff'
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloRankings = Titanium.UI.createLabel({
	color:'#000',
	text:'Ranking',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top : "10%",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width:'auto'
});

// Boton para regresar a la pantalla anterior
var btnRegresarR = Titanium.UI.createButton({
	title: 'Regresar',
   	top: 0,
   	left: 0,
   	width: "25%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "10%"
})
btnRegresarR.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Regresar");   
   menu.open();
   rankings.close();
});


var tableData = [ {title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'} ];
//se crea la tabla donde se mostrara el ranking actual del concurso
var tablaRanking = Titanium.UI.createTableView({
	width : "85%",
	height : "75%",
	top : "18%",
	left : "7.5%",
	data: tableData
});

function cargarRankings(){
	rankings.add(tituloRankings);
	rankings.add(btnRegresarR);
	rankings.add(tablaRanking)
}
