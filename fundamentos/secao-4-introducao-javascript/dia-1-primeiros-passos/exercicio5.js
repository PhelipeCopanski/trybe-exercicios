const degreeAngleA = 40;
const degreeAngleB = 50;
const degreeAngleC = 80;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;
if (allAnglesArePositives){
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('erro: ângulo inválido')
}