function returnPromise (p1, p2, p3) {
    return new Promise((resolve, reject) => {
        if(typeof p1 != 'number' || typeof p2 !== 'number'
        || typeof p3 != 'number') reject(new Error('Informe somente numeros'))

        const resultado = (p1 + p2) * p3;

        if(resultado < 50) reject(new Error('Valor muitop baixo'));

        resolve(resultado);
    });
}

returnPromise(2, 5, 12)
  .then((result) => console.log(`O resultado é: ${result}`))
  .catch((e) => console.log(e.message))