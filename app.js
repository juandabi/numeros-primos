function evaluarlosnumeros(limitesuperior) {
    let numero = 0;
    while (numero <= limitesuperior) {
        // console.log("🚀 ~ numero", numero);

        esprimo(numero);

        numero++;
    }
}

function esprimo(numero) {
    let esprimo = true;
    if (numero == 2 || numero == 3) {
        console.log("Es primo", numero);
    } else {
        for (let index = 2; index <= numero / 2; index++) {
            if (numero % index == 0) {
                esprimo = false;
            }
        }
    }
    if (numero > 3 && esprimo == true) {
        console.log("Es primo", numero);
    }
}
