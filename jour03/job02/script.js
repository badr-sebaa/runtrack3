'use strict';

document.addEventListener('DOMContentLoaded', function loaded(){


let arc1 = document.getElementById("1") ;
let arc2 = document.getElementById("2") ;
let arc3 = document.getElementById("3") ;
let arc4 = document.getElementById("4") ;
let arc5 = document.getElementById("5") ;
let arc6 = document.getElementById("6") ;

let arcsmelanger = [arc1,arc2,arc3,arc4,arc5,arc6];
let arcsranger = [];



function afficher(id,liste){

    for(let i = 0 ; i < liste.length; i++){

        document.getElementById(id).innerHTML += liste[i];

    }
    
}

function move(element,liste,liste2){


    liste2.push(element) ;
    let i = liste.indexOf(element);
    liste2.splice(i,1);

}

document.getElementById("1").onclick = move(arc1,arcsmelanger,arcsranger);
});

