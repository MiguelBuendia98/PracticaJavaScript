const lista1 = 
[
    1,
    2,
    3,
    4,
    1,
    2,
    4,
]

const lista1Count = {};

lista1.map
(
    function (elemento)
    {
        if (lista1Count[elemento])
        {
            //lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1;
        }
        
        else
        {
            lista1Count[elemento] = 1;
        }
    }
);

lista1Array = Object.entries(lista1Count).sort
(
    function (valorAcomulado, nuevoValor)
    {
        return valorAcomulado - nuevoValor;
    }
);