

function bissextile(annee){

    if (annee%4 == 0){
        return true;
    }
    return false;
}

console.log(bissextile(1999));