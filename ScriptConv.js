
function Fahrenheit(text){

    RegExp = /[0-9]*?\.[0-9]*?f/
    return RegExp.test(text);

}


function Centigrados(text){

    RegExp = /[0-9]*?\.[0-9]*?c/
    return RegExp.test(text);

}

function Convertir(){

    var Input = document.getElementById("input").value;
    var Output = document.getElementById("output");
    var Float = parseFloat(Input);
    
    if( Fahrenheit( Input ) ){
	
	Input = Input.substring(0, Input.length-1 );
	Output.value = (Float-32)/1.8; 

    }
    else if( Centigrados( Input ) ){

	Input = Input.substring(0, Input.length-1 );
	Output.value = ( Float * (9 / 5) ) + 32; 

    }

}