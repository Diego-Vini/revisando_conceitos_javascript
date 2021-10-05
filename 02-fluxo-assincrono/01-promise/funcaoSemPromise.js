function calcularDivisao (n1, n2) {
    if (n2 == 0) throw new Error('Não pode ser dividido por zero');

    const resultado = n1 / n2;

    return resultado;
};

try {
    const resultado = calcularDivisao(2, 2);
    console.log(resultado);
} catch (e) {
    console.log(e.message);
}