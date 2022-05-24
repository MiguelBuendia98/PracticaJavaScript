// Codigo del cuadrado variable con funciones
console.group("Cuadrados");

function perimetroCuadrado(lado)
{
    return lado * 4;
} 

function areaCuadrado(lado)
{
    return lado * lado;
} 

console.groupEnd();
// --------------------------------------------------------------------------


// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base)
{
    let pT = lado1 + lado2 + base;
    return pT;
}

function areaTriangulo(base, altura)
{
    let aT = (base * altura) / 2;
    return aT;
}

console.groupEnd();
// --------------------------------------------------------------------------


// Codigo del circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radioC)
{
    return radioC * 2;
}

// Circunferencia
function perimetroCirculo(diametroC)
{
    let piC = Math.PI;
    return diametroC * piC;
}

// Area
function areaCirculo(radioC)
{
    let piC = Math.PI;
    return (radioC * radioC) * piC;
}

console.groupEnd();
// --------------------------------------------------------------------------

// Aqui interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
// -------------------------------------------------------------------------

// Triangulo
function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("Lado1");
    const value1 = input1.value1;

    const input2 = document.getElementById("Lado2");
    const value2 = input2.value2;

    const input3 = document.getElementById("Base");
    const value3 = input3.value3;

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

// function calcularAreaTriangulo()
// {
//     const input = document.getElementById("InputCuadrado");
//     const value = input.value;

//     const area = areaCuadrado(value);
//     alert(area);
// }
// -------------------------------------------------------------------------