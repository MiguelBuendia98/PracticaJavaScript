// Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El preimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();
// --------------------------------------------------------------------------

// Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo son:" 
    + "\nLado 1: " + ladoTriangulo1 
    + "\nLado 2: " + ladoTriangulo2 
    + "\nLado 3: " + baseTriangulo
    + "\nAltura: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm^3");

console.groupEnd();
// --------------------------------------------------------------------------

// Codigo del circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;

//Diametro
const diametroCirculo = radioCirculo * 2;

// PI
const piCirculo = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * piCirculo;

// Area
const areaCirculo = (radioCirculo * radioCirculo) * piCirculo;

console.log
(
    "Radio circulo: " + radioCirculo
    + "\nDiametro circulo: " + diametroCirculo
    + "\nCircunferencia: " + perimetroCirculo
    + "\nArea circulo: " + areaCirculo
);

console.groupEnd();
// --------------------------------------------------------------------------