console.log("hassan here");

function calc(a_b_c){
    let i = document.getElementById("input")
    i.value += a_b_c
}
function equal(){
    let total = document.getElementById("input")
    // console.log(eval(total.value));
    total.value = eval(total.value)
    
}

function clean(){
    let empty = document.getElementById("input")
    empty.value = " "
}

function delet(){
   let del = document.getElementById("input")
   del.value = del.value.slice(0, -1); 
}