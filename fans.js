let pi = Math.PI;

function angle (largeSide, shortSide, height){
    
    let angle = (Math.floor(100* 2 * 180 * Math.asin(((largeSide-shortSide)/2)/height)/pi)/100);
    return angle;
}


function area (largeSide, shortSide, arcAngle){
    let numerator = pi * ((largeSide ** 2) - (shortSide ** 2)) * (arcAngle/360);
    let denominator = (4 * (Math.sin((arcAngle*pi/360))**2)) * 1000000;
    let area = numerator /denominator;
    return area;

}


function gsm(weight, area){
    let gsm = Math.floor(weight / area);
    return gsm;
}


function findTheGsm() {

    let weight = document.getElementById('weight').value;
    let largeSide = document.getElementById('largeSide').value;
    let shortSide = document.getElementById('shortSide').value;
    let height = document.getElementById('height').value;
    let resultGsm = document.getElementById('resultGsm');

    let arcAngle = angle(largeSide, shortSide, height);
    let fanarea = area(largeSide, shortSide, arcAngle);
    let fanGsm = parseInt(gsm(weight, fanarea));
    
    if (isNaN(fanGsm) || fanGsm === 0){
        gsmResult.value = "Ingrese las dimensiones y el peso";
    } else{
        gsmResult.value = fanGsm;
    }
    

}