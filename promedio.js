// Media aritmetica ((venta1 + venta2 + venta3) / cantidad de ventas)

const lista1 = 
[
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;

for(let i = 0; i < lista1.length; i++)
{
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

//***********************************************************/

// function calcularMediaAritmetica(lista)
// {
//     let sumaLista = 0;

//     for(let i = 0; i < lista1.length; i++)
//     {
//         sumaLista = sumaLista + lista[i];
//     }

//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;
// }

/**********************************************************/

function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce
    (
        function (valorAcomulado = 0, nuevoElemento)
        {
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}