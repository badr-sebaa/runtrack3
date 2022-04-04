'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


document.addEventListener('keypress',write);

function write(e){


    document.getElementById('keylogger').value += e.key;

}

  
});

