var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
        return `Auto ${this.modelo} ${this.annio}`;
    }
};

// Función constructora 
function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var autos=[];
var numbers=prompt("Ingrese la cantidad de nuevos ingresos: ");
for (var i=0; i<numbers;i++){
    var marca=prompt("Ingrese la marca del auto: ")
    var modelo=prompt("Ingrese el modelo del auto: ")
    var annio=prompt("Ingrese el año del auto: ")
    autos.push(new auto(marca,modelo,annio))
}

for(var autoi of autos){
    console.log(`Auto de marca: ${autoi.marca}, modelo: ${autoi.modelo}, año:${autoi.annio} \n ` )
}
