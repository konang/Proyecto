/*#Archivo: comparacion.js
 #Proyecto: Aplicación Móvil para plataforma Android Training Assistant
 #Autor(es): Erick Dario Garcia Suarez
 #Fecha de creación: 18/Marzo/2013
 #Fecha de última actualización: 21/Marzo/2013
 #Descripción general: Documento para la pantalla comparacion de participantes de la aplicacion
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


var comparacion = Titanium.UI.createView({
   backgroundColor:'#fff'
});

//Etiqueta que contiene el texto del titulo de la pantalla
var tituloComparacion = Titanium.UI.createLabel({
	color:'#000',
	text:'Comparación entre 2 participantes',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top : "10%",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width:'auto'
});

//Elemento donde se seleeciona el criterio de busqueda de los participantes
var pickerComparacion = Ti.UI.createPicker({
  top:"27%",
  width: "75%"
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Matricula'});
data[1]=Ti.UI.createPickerRow({title:'Nombre'});
data[2]=Ti.UI.createPickerRow({title:'Posicion'});
data[3]=Ti.UI.createPickerRow({title:'ID'});

pickerComparacion.add(data);
pickerComparacion.selectionIndicator = true;

//Etiqueta para el cuadro de buscar1
var etiquetaBuscar1 = Titanium.UI.createLabel({
	color:'#000',
	text:'Participante 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top : "40%",
	//left: "10%",
	width:'auto'
});

//Recuadro donde el usuario ingresara la matricula numero 1 a buscar para la comparacion
var fieldBuscar1 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "46%", 
  //left: "10%",
  width: "75%",
  height: "12%"
});

//Etiqueta para el cuadro de buscar2
var etiquetaBuscar2 = Titanium.UI.createLabel({
	color:'#000',
	text:'Participante 2',
	font:{fontSize:20,fontFamily:'Roboto'},
	top : "60%",
	//left: "10%",
	width:'auto'
});

//Recuadro donde el usuario ingresara la matricula numero 2 a buscar para la comparacion
var fieldBuscar2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "66%", 
  //left: "10%",
  width: "75%",
  height: "12%"
});

var toast = Ti.UI.createNotification({
    message:"Please Stand By",
    duration: Ti.UI.NOTIFICATION_DURATION_LONG
});

// Boton para activar la busqueda del participante
var btnBuscarComparacion = Titanium.UI.createButton({
	//title: 'Buscar',
   	top: "80%",
   	//left: "10%",
   	width: "20%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	backgroundImage: "images/action_search.png",
   	borderColor: '#fff',
   	backgroundSelectedImage: "images/action_search_dis.png",
   	height: "15%"
})
btnBuscarComparacion.addEventListener('click',function(e)
{
	toast.show();
   Titanium.API.info("You clicked the button Buscar Comparacion");
});

// Boton para regresar a la pantalla anterior
var btnRegresarC = Titanium.UI.createButton({
	//title: 'Regresar',
   	top: 0,
   	left: 0,
   	width: "15%",
   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   	height: "10%",
   	backgroundImage: "images/back.png"
})
btnRegresarC.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button Regresar");  
   menu.remove(comparacion); 
   //menu.open();
   //comparacion.close();
});

function cargarComparacion(){
	comparacion.add(tituloComparacion);
	comparacion.add(btnRegresarC);
	comparacion.add(fieldBuscar1);
	comparacion.add(fieldBuscar2);
	comparacion.add(btnBuscarComparacion);
	comparacion.add(etiquetaBuscar1);
	comparacion.add(etiquetaBuscar2);
	comparacion.add(pickerComparacion);
}

pickerComparacion.setSelectedRow(0, 2, false); // select Mangos
