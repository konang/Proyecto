var api = {
    xhr: null
};
 
var ranking = (function() {
 //create an object which will be our public API
 //data format must be json or xml
 api.getRanking = function(success, error) {    
    if(api.xhr == null){
        api.xhr = Titanium.Network.createHTTPClient();
    }   
    var url = "http://acmmty.260mb.org/acm/getInfo.php?";    
	url = url + "ranking=true";
    
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