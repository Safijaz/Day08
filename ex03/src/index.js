// write code below this line
var myGlobaVariable = 10;
function function1(){
    function1= notGlobalVariable(9);
    
}
// write code above this line
function function2() {
    var result="";
    if(typeof myGlobalVariable != "undefined"){
      resut += "myGlobalVariabe: " +myGlobalVariable;
    }
    if(typeof notGlobalVariable != "undefined") {
    result += " notGlobalVariable: " + notGlobalVariable;
    }
 
 console.log(result);
    }
  function1();
  function2();
module.exports = {
    function1(),
    function2()
};



