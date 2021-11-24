function weightPerSheet(gsm, side1, side2){
    
    let weightOfSheet = gsm * side1 * side2 / 1000000000;

    return weightOfSheet;

}

function findNumberOfSheets(){

    let weight = document.getElementById('weight').value;
    let gsm = document.getElementById('gsm').value;
    let side1 = document.getElementById('largeSide').value;
    let side2 = document.getElementById('shortSide').value;

    let weightOfSheet = weightPerSheet(gsm, side1, side2);

    let numberOfSheets = Math.floor(weight * 1000 / weightOfSheet);

    if (isNaN(numberOfSheets) || numberOfSheets === 0){
        resultSheets.value = "Ingrese las dimensiones y el peso";
    } else{
        resultSheets.value = numberOfSheets;
    }




}