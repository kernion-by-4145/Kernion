
function dddata() {
//call input field
var fro = document.getElementById('myNumber');
    var clo = fro.defaultValue;
    var typeval = fro.value;
    while(typeval.includes(" ")){
    typeval = typeval.replace(/ /,'-');}
   
    	  var dataa = typeval;
    	  return dataa;

  
 


}

	
	
