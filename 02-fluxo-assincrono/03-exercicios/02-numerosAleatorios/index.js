function returnPromise (p1, p2, p3) {
    return new Promise((resolve, reject) => {
        if(typeof p1 != 'number' || typeof p2 !== 'number'
        || typeof p3 != 'number') reject(new Error('Informe somente numeros'))

        const resultado = (p1 + p2) * p3;

        if(resultado < 50) reject(new Error('Valor muito baixo'));

        resolve(resultado);
    });
}

async function randomNumber() {
  const numbers = [];

  for(let index = 0; index < 3; index += 1) {
    const calc = Math.floor(Math.random() * 100 + 1);
    numbers.push(calc); 
  }
  
  const newNumbers = numbers.map((number) => number )
  try {
    const result = await returnPromise(...newNumbers);
    console.log(`O resultado é: ${result}`);
  } catch (error) {
    console.error(error.message);
  }


//   returnPromise(...newNumbers)
//   .then((result) => console.log(`O resultado é: ${result}`))
//   .catch((e) => console.log(e.message))
}

randomNumber();

