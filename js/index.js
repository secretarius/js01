const a = parseFloat(prompt("Enter A"));
const b = parseFloat(prompt("Enter B"));
const c = parseFloat(prompt("Enter C"));

const result = sloveSquareEq(a, b, c);
alert(result);

function sloveSquareEq(a, b, c) {
    if (a===0) {
        return "Has no solution!";
    }
    
    const d = calcDiscr(a, b, c);
    let x1;
    let x2;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d))/( 2 * a );
        x2 = (-b + Math.sqrt(d))/( 2 * a );

        return "x1 = " + x1 + "x2 " + x2 + "" + d;
    }  else if (d===0) {
        x1 = b/(2*a);
        return "x1 = " + x1 + "x2 " + x2 + "" + d;
    }  else if (d<0) {
        return d;
    }
    
}            
            
function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}




//let greatings="Hello!";
//alert(greatings);

//let age = +prompt("Enter your age");
//let years = age + 1;
//alert(years);

//let age = parseInt(prompt("Enter your age"));
//let years = (age + 1);
//alert(years);

//function add(a, b, c){
    //const res = a + b + c;
    //return res;
//}

//const total = add(1, 2, 3);
//alert(total);
//let age = parseInt(prompt("Please enter your age: "));
//function checkAge(age) {
    //if(age <= 18) {
        //return "child";
        
    //} else { 
        //return "adult";
    //}
//}

//alert("You are " + checkAge(age));