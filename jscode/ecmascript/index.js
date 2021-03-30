// ecmacscript6
function myfunction(name="Pablo", age=22,country="PE"){
    console.log(name,age,country);    
};
myfunction();
myfunction('Pedro',23,"MX");

let hello="Hello"
let world="world"
let phrase=`${hello} ${world}`
console.log(phrase)
//////////
let loren=`primera linea de frese.
    Segunda línea de frase`;
console.log(loren);

let team1=["Pedro", "Pablo", "Juan"];
let team2;
//////////
let name="Pablo";
let age=33;

obj={name, age};

console.log(obj);

const names=[
    {name:'Pablo', age:33},
    {name:'Hana',age:28}
];
// arrow function
let listofname=names.map(item => console.log(item.name));
let listofname5=(names,age) => {
    //...
};
let square=num => num*num;

// promised
const hellopromised =() => {
    return new Promise(
        (resolve,reject) => {
            if (true)
                resolve('Hey!!');
            else 
                reject('Ups!!');
        }
    )
};

hellopromised()
    .then(response => console.log(response))
    .catch(err => console.log(err));

///////////
// class
class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB) {
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }
}

const calc=new calculator();
console.log(calc.sum(3,2));

/// module
import { hello } from './module.js';
//hello= require('./module');
console.log(hello());


// Generators
function* HelloWord() {
    if (true){
        yield 'Hello, ';        
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = HelloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//////////////////
// ecmacscript7
let  numbers=[1,4,5,6,7];

if (numbers.includes())
    console.log('Valor encontrado');
else
    console.log('Valor no encontrado');

let base=2;
let exponente=5;
let pow=base ** exponente;
console.log(pow);

////////////
// ecmacscript8
const data={
    frontend:'myfront',
    backend:'myback',
    design:'mydesign',
}

const entries=Object.entries(data);
console.log(entries);
console.log(entries.length);

const values=Object.values(data);
console.log(values);
console.log(values.length);

const strings='Hello';
console.log(strings.padStart(7,'Hi'));
console.log(strings.padEnd(12,'------'));

// async await
const HelloWord= () =>{
    return new Promise(
        (resolve,reject) => {
            (true)
            ? setTimeout(
                () => resolve('Hello Worl'), 3000
            )
            : reject(new Error('Test Error'))
        }
    )
};

const helloasync= async () =>{
    const hello= await HelloWord();
    console.log(hello);
};

helloasync();

const anotherhelloworld=async () =>{
    try{
        const hello= await HelloWord();
        console.log(hello);
    }
    catch (error){
        console.log(error);
    }    
};

anotherhelloworld();

////////////
// ecmacscript9
// extraction

const obj = {
    name: 'Pablo',
    age: 33,
    country:'PE'    
};

let { name, ...all }=obj;
console.log(name, all);

const obj1={
    ...obj,
    city:'Lima'
};
console.log(obj1);

// promise
const helloworld=() => {
    return new Promise(
        (resolve,reject) =>{
            (true)
            ? setTimeout(() => resolve('Hello World...'),3000)
            : reject(new Error('Test Error...'))
        }
    );
};

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Complete!!!'))


// regex - regular expresion
const regexdata= /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match=regexdata.exec('2020-11-22');
const year=match[1];
const month=match[2];
const day=match[3];

console.log(year, month, day);

////////////
// ecmacscript10
//array flat
let arr = [1,2, [3,4,[5,6,7]]];
console.log(arr.flat(3));

//array flatMap
let arr = [1,2,3,4,5];
console.log(arr.flatMap(val => [val,val*2]));

// strings trim
let hello='     Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello='Hello World     ';
console.log(hello);
console.log(hello.trimEnd());

//
try {
    
} catch {
    error    
}

// array to objects
let entries = [["name","Pablo"],["age",33]];
console.log(Object.fromEntries(entries));

//
let mysymbol="My symbol";
let symbol=Symbol(mysymbol);
console.log(symbol.description);