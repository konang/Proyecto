var api = {
    xhr: null
};
 
var comparacionPhp = (function() {
 //create an object which will be our public API
 //data format must be json or xml
 api.getComparacionPhp = function(column1, dato1, column2, dato2, success, error) {    
    if(api.xhr == null){
        api.xhr = Titanium.Network.createHTTPClient();
    }   
	
    var url = "http://acmmty.260mb.org/acm/comparacion.php?";    
	url = url + "column1=" + column1;
	url = url + "&dato1=" + dato1;
	url = url + "&column2=" + column2;
	url = url + "&dato2=" + dato2;
    
	api.xhr.open('GET', url);
    api.xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

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
 
 api.getPuntosPhp = function(detallePuntos1, detallePuntos2, success, error) {    
    if(api.xhr == null){
        api.xhr = Titanium.Network.createHTTPClient();
    }   
	
    var url = "http://acmmty.260mb.org/acm/comparacion.php?";    
	url = url + "detallePuntos1=" + detallePuntos1;
	url = url + "&detallePuntos2=" + detallePuntos2;
    
	api.xhr.open('GET', url);
    api.xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

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
            success(jsonResponse);
        }
    };
                   
    api.xhr.send();
 };
 
 //return our public API
 return api;
} ());