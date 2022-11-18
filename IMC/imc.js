const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso."
        } else if (valorIMC < 25) {
            classificacao = 'tu está com o peso ideal.';
        } else if (valorIMC < 30) {
            classificacao = 'tu está levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'Tu está com Obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'Tu está com obesidade grau II.';
        } else {
            classificacao = 'Tu está com obesidade grau III.';
        }

        resultado.textContent = `${nome} Seu IMC é ${valorIMC} e tu está ${classificacao}`;

    } else {
        resultado.textContent = 'Tu precisa Preencher todos os campos!'
    }
}


calcular.addEventListener('click', imc);