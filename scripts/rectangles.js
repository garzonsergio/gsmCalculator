function findRectangleGSM(){
    let weight = document.getElementById('weight').value;
    let side1 = document.getElementById('side1').value;
    let side2 = document.getElementById('side2').value;

    let area = side1 * side2 /1000000;

    let gsm = Math.floor(10 * weight / area) /10 ;

    if (isNaN(gsm) || gsm === 0){
        gsmResult.value = "Ingrese las dimensiones y el peso";
    } else{
        gsmResult.value = gsm;
    }


}