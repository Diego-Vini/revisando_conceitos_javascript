function calculaDivisao (num1, num2) {
    const promise = new Promise((resolve, reject) => {
      if (num2 == 0) reject(new Error('Não pode dividir por zero'));

      const resultado = num1 / num2;

      resolve(resultado)
    })

    return promise;
}

calculaDivisao(2, 2)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message))