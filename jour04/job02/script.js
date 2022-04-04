'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


var ecole = {

    name : "LaPlateforme_",
    adress : "8 rue d'hozier",
    city : "Marseille",
    nb_staff : 11,
    creation : 2019

};

var json = JSON.stringify(ecole);


function JsonValueKey(jsontext,key){

    switch (key) {
        case 'name':
          console.log(jsontext.name);
          break;
        case 'adress': console.log(jsontext.adress);
        break;
        case 'city':console.log(jsontext.city);
        break;
        case 'nb_staff':console.log(jsontext.nb_staff);
        break;
        case 'creation':console.log(jsontext.creation);
        break;
        default:
          console.log(`désoler mais seul (name,adress,city,nb_staff,creation) font partie de la liste`);
      }

}

JsonValueKey(ecole,"city");

});

