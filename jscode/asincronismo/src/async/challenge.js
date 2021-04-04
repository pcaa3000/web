const fechData= require('../utils/fechData');
const API="https://rickandmortyapi.com/api/character/";

const anotherfunction= async (url_api) =>{
    try {
        const data = await fechData(url_api);
        const character = await fechData(`${url_api}${data.results[0].id}`);
        const origin=await fechData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before...');
anotherfunction(API);
console.log('After...');