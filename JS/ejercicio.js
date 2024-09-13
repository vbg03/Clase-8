//html y javascript donde tomen 3 numeros y le diga al usuario cual es el menor
//y si de esos tres numeros dos son iguales decir cual numero es
//se debe hacer con temarios, funcion flechas y si se puede con promesas

const menorNumero = (n1, n2, n3) => 
    (n1 < n2 && n1 < n3) ? n1 :
    (n2 < n1 && n2 < n3) ? n2 : n3;

const verificarIguales = (n1, n2, n3) =>
    (n1 === n2) ? `El número ${n1} se repite` :
    (n1 === n3) ? `El número ${n1} se repite` :
    (n2 === n3) ? `El número ${n2} se repite` : 
    'No hay números iguales';

const verificarNumeros = () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    const promesaMenor = new Promise((resolve, reject) => {
        const menor = menorNumero(num1, num2, num3);
        menor ? resolve(menor) : reject('Error al calcular el menor número');
    });

    const promesaIguales = new Promise((resolve, reject) => {
        const iguales = verificarIguales(num1, num2, num3);
        iguales ? resolve(iguales) : reject('Error al verificar números iguales');
    });

    Promise.all([promesaMenor, promesaIguales])
        .then(([menor, iguales]) => {
            document.getElementById('resultado').textContent = `El número menor es: ${menor}. ${iguales}.`;
        })
        .catch(error => {
            document.getElementById('resultado').textContent = `Error: ${error}`;
        });
};

