/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";
// random images
const min=1, max=122;
const random=()=> Math.floor(Math.random()*(max-min))+min;
// images HTML -> JS
const createImageNode=()=>{
    const container = document.createElement('div');
    container.className='p-4';
    const image= document.createElement('img');
    image.className='mx-auto rounded-md bg-gray-300';
    image.width='320';
    image.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
    image.dataset.src=`https://randomfox.ca/images/${random()}.jpg`
    container.appendChild(image);
    return container;
};
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

const mountnode=document.getElementById('images')
//eventListerner DOM -> addImages
const addButton=document.querySelector("button[type='submit']");
const addImage=()=>{
    const newImage=createImageNode();
    mountnode.append(newImage);
    registerImage(newImage);
};
addButton.addEventListener('click',addImage);

//clean Images
const clean=document.querySelector("button[type='reset']");
clean.addEventListener('click',()=>{
    mountnode.innerHTML="";
});
