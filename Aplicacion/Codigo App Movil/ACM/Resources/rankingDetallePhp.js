var api = {
    xhr: null
};
 
var rankingDetallePhp = (function() {
 //create an object which will be our public API
 //data format must be json or xml
 api.getDetallePhp = function(dato, success, error) {    
    if(api.xhr == null){
        api.xhr = Titanium.Network.createHTTPClient();
    }   
	
    var url = "http://acmmty.260mb.org/acm/busqueda.php?";    
	url = url + "column=Posicion";
	url = url + "&dato=" + dato;
    
	api.xhr.open('GET', url);
    api.xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

   	//Ti.API.info(hola);
    api.xhr.onerror = function(e){
        Ti.API.error("API ERROR " + e.error);
        if (error) {
            error(e);
        }
    };
    
    api.xhr.onload = function(){
        Ti.API.debug("API response: " + this.responseText);
        if (success) {
            var jsonResponse = JSON.parse(this.responseText);
            //alert(""+jsonResponse);
            success(jsonResponse);
        }
    };
                   
    api.xhr.send();
 };
 
 //return our public API
 return api;
} ());