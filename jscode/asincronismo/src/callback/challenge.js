let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;
const API="https://rickandmortyapi.com/api/character/";

function fechData(url_api,callback) {
    let xhttp=new XMLHttpRequest();
    xhttp.open('GET', url_api,true);
    xhttp.onreadystatechange=function(event){
        if (xhttp.readyState===4){ //complete
            if (xhttp.status === 200) //ok
                callback(null,JSON.parse(xhttp.responseText));
            else{
                const error = new Error(`Error: ${url_api}`);
                return callback(error,null);
            }                
        }
    }
    xhttp.send();
}

fechData(API,function (error1,data1) {
    if (error1) return console.error(error1);
    fechData(API+data1.results[0].id,function(error2, data2){
        if (error2) return console.error(error2);
        fechData(data2.origin.url, function(error3,data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});