
function sum(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;

    // parseFloat(x);

    // parseFloat(y);
   
    let result = parseFloat(x)+ parseFloat(y);

    // return result;

    document.getElementById("result").innerHTML = "The result is  = " + result;


}


// let summation = sum();

// console.log(summation);

// document.getElementById("result").innerHTML = "The result is  = " + summation;