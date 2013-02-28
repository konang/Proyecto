var sendReq = getXmlHttpRequestObject();
var receiveReq = getXmlHttpRequestObject();
var con;

function trim(value) {
   var temp = value;
   var obj = /^(\s*)([\W\w]*)(\b\s*$)/;
   if (obj.test(temp)) { temp = temp.replace(obj, '$2');}
   var obj = /  /g;
   while (temp.match(obj)) { temp = temp.replace(obj, " ");}
   return temp;
}

function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		document.getElementById('p_status').innerHTML = 'Status: Cound not create XmlHttpRequest Object.  Consider upgrading your browser.';
	}
}

function onload(){
    if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
		receiveReq.open("GET", 'getInfo.php?hola=1', true);
		receiveReq.onreadystatechange = handleReceiveInfo;
		receiveReq.send(null);
	}
}

function handleReceiveInfo() {
	if (receiveReq.readyState == 4) {
        var dom = receiveReq.responseXML;
        //alert(receiveReq.responseText);
        var steps = dom.getElementsByTagName("message"), totalSteps = steps.length;
        //lastMessage = dom.getElementsByTagName("message")[0].getAttribute("id");
        //
        //totalSteps += lastMessage;
        
        for(con = 1; con <= totalSteps; con++){
            //document.getElementById("qwerty").innerHTML += "<tr>";
            var id = dom.getElementsByTagName("message")[con-1].getAttribute("id");
            var celdaId= "<td id=\"id-"+id+"\" class=\"celda\" >"+id+"</td>";
            var nombre = dom.getElementsByTagName("nombre")[con-1].textContent;
            var celdaNombre = "<td id=\"nombre-"+id+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+nombre+"</td>";
            var matricula = dom.getElementsByTagName("matricula")[con-1].textContent;
            var celdaMatricula = "<td id=\"matricula-"+id+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+matricula+"</td>";

            var boton = "<td class=\"celda\"><input id=\"boton-"+id+"\" type=\"button\" value=\"Borrar Fila\" onclick=\"borrarFila(this)\"></td>";
            var renglon = "";
            renglon += "<tr>";
            renglon += celdaId;
            renglon += celdaNombre;
            renglon += celdaMatricula;
            renglon += boton;
            renglon += "</tr>";
            document.getElementById("tabla-participante").innerHTML += renglon;
            //alert("+++"+renglon);
            //alert(document.getElementById("tabla-participante").innerHTML);
        }
	}
}

//Funcion para calcular el largo en pixels det texto dado
function getTextWidth(texto)
{
	//Valor por default : 150 pixels
	var ancho = 150;

	if(trim(texto) == "")
	{
		return ancho;
	}

	//Creación de un span escondido que se puedrá medir 
	var span = document.createElement("span");
	span.style.visibility = "hidden";
	span.style.position = "absolute";

	//Se agrega el texto al span y el span a la página
	span.appendChild(document.createTextNode(texto));
	document.getElementsByTagName("body")[0].appendChild(span);

	//tamaño del texto
	ancho = span.offsetWidth;

	//Eliminación del span
	document.getElementsByTagName("body")[0].removeChild(span);
	span = null;

	return ancho;
}


//Funcion de modificacion del elemento seleccionado mediante doble-click
function modificar(obj)
{ 
	//Objeto que sirve para editar el valor en la pagina 
	var input = null;

	input = document.createElement("input");


	//Asignar en la caja el valor de la casilla
	if (obj.innerText)
		input.value = obj.innerText;
	else
		input.value = obj.textContent;
	input.value = trim(input.value);

	//a la caja INPUT se la asigna un tamaño un poco mayor que el texto a modificar
	input.style.width  = getTextWidth(input.value) + 30 + "px";

	//Se remplaza el texto por el objeto INPUT
	obj.replaceChild(input, obj.firstChild);

	//Se selecciona el elemento y el texto a modificar
	input.focus();
	input.select();

	//Asignación de los 2 eventos que provocarán la escritura en la base de datos 

      //Salida de la INPUT
	input.onblur = function salir()
	{
		salvarMod(obj, input.value);
		delete input;
	};

	//La tecla Enter
	input.onkeydown = function keyDown(event)
	{
		if(event.keyCode == 13)
        {
			salvarMod(obj, input.value);
			delete input;
		}
	};
}

function borrarFila(obj){
    var x = obj.attributes;
    var att=x.getNamedItem("id");
    
    var inicio = 0;
    var cadena = att.value.charAt(inicio);
    while(cadena!='-'){
        inicio++;
        cadena = att.value.charAt(inicio);
    }
    cadena = att.value.charAt(inicio+1);
    sendReq.onreadystatechange = cargar;
    sendReq.open("GET", 'getInfo.php?borrarId='+cadena, true);
    //alert(cadena)
    sendReq.send(null);
    con--;
}

function agregarFila(){
    //alert(con);
    
    //alert(renglon);
    sendReq.onreadystatechange = cargar;
    sendReq.open("GET", 'getInfo.php?agregar='+con, true);
    sendReq.send(null);
    con++;
}

function obtenerId(){
    con = sendReq.responseText;
    //alert(con);
    var nombre = "nombre";
    var celdaNombre = "<td id=\"nombre-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+nombre+"</td>";
    var apellido = "apellido";
    var celdaApellido = "<td id=\"apellido-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+apellido+"</td>";
    var direccion = "direccion";
    var celdaDireccion = "<td id=\"direccion-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+direccion+"</td>";
    var codigo = "codigo";
    var celdaCodigo = "<td id=\"codigo-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+codigo+"</td>";
    var ciudad = "ciudad";
    var celdaCiudad = "<td id=\"ciudad-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+ciudad+"</td>";
    var hijos = "0";
    var celdaHijos = "<td id=\"hijos-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+hijos+"</td>";
    var email = "email";
    var celdaEmail = "<td id=\"email-"+con+"\" class=\"celda\" ondblclick=\"modificar(this)\">"+email+"</td>";
    var boton = "<td class=\"celda\"><input id=\"boton-"+con+"\" type=\"button\" value=\"Borrar Fila\" onclick=\"borrarFila(this)\"></td>";
    var renglon = "";
    renglon += "<tr>";
    renglon += celdaNombre;
    renglon += celdaApellido;
    renglon += celdaDireccion;
    renglon += celdaCodigo;
    renglon += celdaCiudad;
    renglon += celdaHijos;
    renglon += celdaEmail;
    renglon += boton;
    renglon += "</tr>";
    document.getElementById("tabla-participante").innerHTML += renglon;
}

function cargar(){
    if (sendReq.readyState == 4){
        document.getElementById("tabla-participante").innerHTML = "<table id=\"tabla-participante\"><tr><th>IDparticipante</th><th>Matricula</th><th>Nombre</th><th></th></table>";
        onload();
    }
}

//Salvando las modificaciones
function salvarMod(obj, valor)
{
    var x = obj.attributes;
    var att=x.getNamedItem("id");
    
    var inicio = 0;
    var cadena = att.value.charAt(inicio);
    while(cadena!='-'){
        inicio++;
        cadena = att.value.charAt(inicio);
    }
    cadena = att.value.charAt(inicio+1);
    var parametro = att.value.substring(0,inicio);
    //alert('getInfo.php?id=1&cad='+cadena+'&att='+parametro+'&valor='+valor);
    //sendReq.onreadystatechange = imprimir;
    sendReq.open("GET", 'getInfo.php?id='+cadena+'&att='+parametro+'&valor='+valor, true);
    sendReq.send(null);
    obj.replaceChild(document.createTextNode(valor), obj.firstChild);

}

