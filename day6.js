
//multiple two number
function mul(a, b){
    console.log(a * b);

}
mul(2, 3);

//divition between two number

function div(c, d){
    return c / d;

}
console.log(div(4, 2));

//divition between two number in callback function

var divition=(c, d) => {
    return c / d;

}
console.log(div(10, 2));

//shortcut 

var divide=(c, d) => c / d;

console.log(divide (10, 2));


//////////////////////////////

var obj={
    name: "Masum",
    lastName: () => console.log("Kazi")
}
console.log(obj.name)
obj.lastName()
