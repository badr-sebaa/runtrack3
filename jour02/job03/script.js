'use strict'

document.addEventListener('DOMContentLoaded', function loaded(){
  let count = 0 ;
document.getElementById("button").onclick = function addone(){

  count ++ ;
  document.getElementById("compteur").innerHTML = count ;

}
});