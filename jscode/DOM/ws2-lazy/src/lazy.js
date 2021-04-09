let totalImage=0, loadedImage=0;

const isIntersecting=(entry)=>{
    return entry.isIntersecting; // true (dentro de la pantalla)    
};

const loadImage=(entry)=>{
    const container=entry.target; //container DIV
    const image=container.firstChild;
    image.src=image.dataset.src;
    image.onload=()=>{
        loadedImage++;
        logstate();
    }
    //desregister la imagen (unlisten)
    observer.unobserve(container);
};

const observer= new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage=(image)=>{
    observer.observe(image);
    totalImage++;
    logstate();
};

function logstate(){
    console.log(`Total Images: ${totalImage}`);
    console.log(`Loaded Images: ${loadedImage}`);
}