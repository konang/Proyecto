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

/*var busqueda = Titanium.UI.createWindow({
    title:'Busqueda',
    //navBarHidden:true,
    backgroundColor:'#fff'
});*/

var busqueda = Titanium.UI.createView({
   backgroundColor:'#fff'
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloBusqueda = Titanium.UI.createLabel({
	color: '#fff',
	text:'Busqueda de participante por...',
	font:{fontSize:25,fontFamily:'Roboto'},
	top : "12%",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width:'auto'
});

//Recuadro donde el usuario ingresara la matricula a buscar
var fieldBuscar = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "45%", 
  //left: "10%",
  width: "75%",
  height: "12%"
});

// Boton para activar la busqueda del participante
var btnBuscar = Titanium.UI.createButton({
	//title: 'Buscar',
   	top: "60%",
   	//left: "10%",
   	width: "20%",
   	backgroundImage: "images/action_search1.png",
   	backgroundSelectedImage: "images/action_search_dis1.png",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "15%"
})
btnBuscar.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Buscar");
});


// Boton para regresar a la pantalla anterior
var btnRegresarB = Titanium.UI.createButton({
	//title: 'Regresar',
   	top: 0,
   	left: 0,
   	width: "15%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "10%",
   	backgroundImage: "images/back1.png"
})
btnRegresarB.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Regresar"); 
   menu.remove(busqueda);  
   //menu.open();
   //busqueda.close();
});

//Elemento donde se seleeciona el criterio de busqueda de un participante
var pickerBusqueda = Ti.UI.createPicker({
  top:"30%",
  width: "75%"
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Matricula'});
data[1]=Ti.UI.createPickerRow({title:'Nombre'});
data[2]=Ti.UI.createPickerRow({title:'Posicion'});
data[3]=Ti.UI.createPickerRow({title:'ID'});

pickerBusqueda.add(data);
pickerBusqueda.selectionIndicator = true;

var fondo = Ti.UI.createImageView({
	//top : "77%",
	//left : "0%",
	height: "100%",
	width: "100%",
  	image:'images/azul_grande.png'
});

function cargarBusqueda(){
	busqueda.add(fondo);
	busqueda.add(tituloBusqueda);
	busqueda.add(btnRegresarB);
	busqueda.add(fieldBuscar);
	busqueda.add(pickerBusqueda);
	busqueda.add(btnBuscar);
}
pickerBusqueda.setSelectedRow(0, 2, false); // select Mangos

