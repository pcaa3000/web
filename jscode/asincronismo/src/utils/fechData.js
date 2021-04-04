let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;

function fechData(url_api) {
    return new Promise((resolve, reject) =>{
        const xhttp=new XMLHttpRequest();
        xhttp.open('GET', url_api,true);
        xhttp.onreadystatechange=function(event){
            if (xhttp.readyState===4){ //complete
                if (xhttp.status === 200) //ok
                    resolve(JSON.parse(xhttp.responseText));
                else{
                    reject (new Error(`Error: ${url_api}`));                    
                }                
            }
        }
        xhttp.send();
    });
}

module.exports = fechData;