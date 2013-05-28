var apiE = {
    xhr: null
};
 
var estadisticasDetallePhp = (function() {
 //create an object which will be our public API
 //data format must be json or xml
 apiE.getEstadisticasPhp = function(dato, estadistica, success, error) {    
    if(apiE.xhr == null){
        apiE.xhr = Titanium.Network.createHTTPClient();
    }   
	
    var url = "http://acmmty.260mb.org/acm/estadisticas.php?";    
	url = url + "estadisticas=true";
	url = url + "&" + estadistica + "=";
	if(dato!=1){
		url = url + dato;
	}else{
		url = url + "True";
	}
    
	apiE.xhr.open('GET', url);
    apiE.xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    apiE.xhr.onerror = function(e){
        Ti.API.error("API ERROR " + e.error);
        if (error) {
            error(e);
        }
    };
    
    apiE.xhr.onload = function(){
        Ti.API.debug("API response: " + this.responseText);
        if (success) {
            var jsonResponse = JSON.parse(this.responseText);
            success(jsonResponse);
        }
    };
                   
    apiE.xhr.send();
 };
 
 //return our public API
 return apiE;
} ());