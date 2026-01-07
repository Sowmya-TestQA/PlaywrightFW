let message:string='Hello, Playwright!';
//message=2; // throws error
console.log(message);
let age :number= 20;
console.log(`Age is: ${age}`);
let isActive :boolean= false;
let numarr:number[]=[1,2,3,4,5];
let data:any="hello";
data=10;// allows as its an any type.

function add(a:number,b:number):number{
    return a+b;
}
add(4,3);

//Object

let user : {name:string, age:number, location:string} = {name:'John', age:30, location:'USA'};
user.location='USA'; // can add new property // throws error
console.log(user.name);




// To compile typescript to javascript use command: npx demo.ts
// To run -> node demo.js
