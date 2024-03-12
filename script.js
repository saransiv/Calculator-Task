let outputscreen= document.getElementById("output")

function display(num) {
    outputscreen.value += num;
    
}
function calculate() {
    try{
        outputscreen.value=eval(outputscreen.value)
    }
    catch(err){
        alert("Invalid Entry")

    }
}


function del() {
    outputscreen.value=outputscreen.value.slice(0,-1);
    
}


function clear() {
    
    outputscreen.value=" ";
    }



