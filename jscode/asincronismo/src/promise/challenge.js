const fechData=require('../utils/fechData');
const API="https://rickandmortyapi.com/api/character/";

fechData(API)
    .then(data =>{
        console.log(data.info.count);
        return fechData(`${API}${data.results[0].id}`);
    })
    .then(data =>{
        console.log(data.name);
        return fechData(data.origin.url);
    })
    .then(data => console.log(data.dimension))
    .catch(error =>console.error(error));