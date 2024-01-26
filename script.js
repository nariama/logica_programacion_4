function fibonacciHasta(número){
    const fibonacci = [0, 1];
    for(let i =2; i <= número; i ++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

const resultado = fibonacciHasta(parseFloat(prompt("Ingresa un número")))
document.write(resultado)