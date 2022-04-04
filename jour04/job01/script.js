'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


   
document.getElementById('button').onclick = function afficher(){

     fetch('expression.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        document.getElementById('citation').innerHTML = data;
    });

   
}


});

var personne = new object();
personne.prenom = Marc;
personne.nom = Ford;
var json = JSON.stringify(personne);
console.log(json); //Cette ligne affiche le texte {prenom:Marc,nom:Ford}.
