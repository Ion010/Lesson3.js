/*let varname = "Test Name";

console.log("Hello " + varname);

let a = 2;
let b = 2.1;
console.log(a ** b);
console.log(a % b);

const var1 = 2;
let var2 = 4;

var2 = 6;
console.log(var2);

if (var2 < 10){
    console.log(true);
}else{
    console.log(false);
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

function funcName(){
    nume = "Vladu"
    alert("Daca Vladu ii loh apasa OK ")   
    console.log(nume + " loh"); 
}

funcName();
funcName();

function myFunction(value){
    if (value < 25){
        alert("Less than need");
    }else if (value == 25){
        alert ("U win");

    }else {
        alert ("More than need");
    }
}

myFunction(12)


let global = 2;

function calculator(a, b){
    let local = a + b + global;
    return local;
}
console.log(global);

let result = calculator(true, false);
console.log(result);


function calcPlus(a, b){
    return a + b;
}
function calcMinus(a, b){
    return a - b;
}
function calcMultiply(a, b){
    return a * b;
}
function calcDiv(a, b){
    return a / b;
}

let result = null;

function mainFunction(operation, a, b){
    if (operation == "+"){
        result = calcPlus(a, b);
        console.log(result);
    }else if (operation == "-"){
        result = calcMinus(a, b);
        console.log(result);
    }else if (operation == "*"){
        result = calcMultiply(a, b);
        console.log(result);
    }else if (operation == "/"){
        result = calcDiv(a, b);
        console.log(result);
    }
}
mainFunction("-", 5, 7);




let EmptyArray = [];  // an empty array
let ArrayWithValue = ["Red", "Green", "Blue"]; // an array with value
//console.log(ArrayWithValue);  //["Red", "Green", "Blue"]
//console.log(ArrayWithValue[0]); //Red
//console.log(ArrayWithValue[1]); //Green
//console.log(ArrayWithValue[2]); //Blue
console.log(ArrayWithValue.length);
for (let i = 0; i < ArrayWithValue.length; i++){
    console.log(ArrayWithValue[i]);  // traditional for
}
for (let element of ArrayWithValue){
    console.log(element);   // for each
    
}*/




let array = ["1"];
array.push("2");  // add smth in the end of array
array.push("3");
array.push("4");
array.unshift(0);  // add smth at the begining
array.pop();  // delete last elemnet
array.shift();  // delete first element
console.log(array);

let multidiminsional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < multidiminsional.length; i++){
    for (let j = 0; j < multidiminsional.length; j++){
        console.log(multidiminsional[i][j]);
    }
}





