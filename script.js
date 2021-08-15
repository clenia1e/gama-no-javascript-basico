console.log("JavaScript Carregad")

function validaCPF() {
    var cpf = document.getElementById("cpf_digitado").value

    if (cpf.length != 11) {
        return false;
    } else {

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        console.log("os nmumeros sao" + numeros)
        console.log("os digtos sao "+ digitos)

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log( " a sioma no primeiro for"+ soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        console.log("o primeiro resultado é"  + resultado)

        // validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {

            return false;
        }

        console.log( digitos.toString().charAt(0) + " é a primeira posicao da variavel soma"  )
        
        
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        console.log(soma);

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        console.log("asoam é " + soma)
        console.log("o resultado é"  + resultado)

        // validação do segundo digito 
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }

}

function validacao() {
    console.log("Iniciando validação CPF");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    var cpf = document.getElementById("cpf_digitado").value

    var resultadoValidacao = validaCPF(cpf);

    console.log(cpf.length)
    if (resultadoValidacao) {
        document.getElementById("success").style.display = 'block';

    } else {
        document.getElementById("error").style.display = 'block';
    }
}