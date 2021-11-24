function findTheCircleGsm(){
    let weight = document.getElementById('weight').value;
    let diameter = document.getElementById('diameter').value;
    let pi = Math.PI;

    let area = (pi * (diameter / 2) ** 2)/ 1000000;
    let gsm = Math.floor(weight / area);

    if (isNaN(gsm) || gsm === 0){
        gsmResult.value = "Ingrese diámetro y peso";
    } else{
        gsmResult.value = gsm;
    }
}
