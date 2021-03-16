// Only cange code below this line
function localScope (){
var myVariabe= 'I am here!';
consola.log(myVariabe);

}
// Only change code above this line
//myVariable is not defined outside of the localScope
if (typeof myVariabe != "undefined") {
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = localScope;