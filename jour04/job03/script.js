'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


document.getElementById("filter").onclick = function filter(){

function getSelectValue(selectId)
    {
      /**On récupère l'élement html <select>*/
      var selectElmt = document.getElementById(selectId);
      /**
      selectElmt.options correspond au tableau des balises <option> du select
      selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
      */
      return selectElmt.options[selectElmt.selectedIndex].value;
    }

  fetch('pokemon.json')
  .then(response => response.json())
  .then(data => {
    
    switch (getSelectValue("type")) {
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

      var json = JSON.stringify(data);
      document.getElementById('afficher').innerHTML = json ;
  });


}


});

