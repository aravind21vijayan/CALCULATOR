function calculate(){
    let expr = document.getElementById("expression").value;
    if(expr){
        try{
            let result = math.evaluate(expr);
            document.getElementById("expression").value=result;
        }
        catch(e){
            alert("Not a Valid expression !! Try Again");
        }
        
    }
    
}


function insert(val){
    let expr = document.getElementById("expression").value + val;
    document.getElementById("expression").value=expr;
}

function aclear(){
    document.getElementById("expression").value = "";
}

function backspace(){
    document.getElementById("expression").value = document.getElementById("expression").value.slice(0,-1);
}