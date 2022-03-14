'use strict';

let jours = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];

jours.forEach(function(item, index, array) {
    console.log(item, index);
    });

 console.log("/////// AUTRE FACON //////");


function afficherjourssemaine(liste){
    for(let i=0;i< liste.length;i++){
        console.log(liste[i]);
    }
}
afficherjourssemaine(jours);