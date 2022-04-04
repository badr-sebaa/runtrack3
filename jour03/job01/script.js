'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


    
function show(){

        document.getElementById("citation").style.display = "block";

}

function hide(){

    document.getElementById("citation").style.display = "none";

}


document.getElementById('show').onclick = show;
document.getElementById('hide').onclick = hide;

});

