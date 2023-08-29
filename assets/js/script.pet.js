// Primeira coisa que eu vou verificar é se meu JS está devidamente linkado no meu HTML.
console.log("O JS está linkado!");

// Entao para fazer acontecer algo eu preciso de uma funcao
// Vamos criar uma funcao para vericar se os inputs estao funcionando.
// Para isso, vamos criar uma funcao chamada verificarInputs.
// Tudo que esta dentro de uma funcao só executa quando a funcao/acao é chamada.

// Entao para fazer acontecer algo eu preciso de uma funcao
// Vamos criar uma funcao para vericar se os inputs estao funcionando.
// Para isso, vamos criar uma funcao chamada verificarInputs.
// Tudo que esta dentro de uma funcao só executa quando a funcao/acao é chamada.
function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    // Para isso, vamos criar uma variável para cada input.
    let tutor = document.getElementById("input-tutor").value;
    let nomedoPet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;

    // Vamos dar um console ou verbo consolar para cada variável.
    console.log("Tutor:" + tutor);
    console.log("Nome do Pet:" + nomedoPet);
    console.log("Espécie:" + especie);
    console.log("Foto:" +  foto);
    

    // Vamos entao criar uma verificacao se os inputs estao vazios.
    // Pois se estao vazio eu preciso de um alerta para o usuario.
    // ou uma mensagem de erro.
    // Para isso, vamos criar uma condicional if.
    if (tutor == "" || nomedoPet == "" || especie == "" || foto == "") {
        // Verificar se o if esta funcionando
        console.log("Os dados estao vazios");
        // Como esse é o primeiro if de verificacao, vamos criar 
        // uma funcao que envia/coloca na tela a mensagem de erro.
        // Usando a div que já temos com id msg.
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem parametro na tela 
    // do usuario. Logo a primeira coisa que eu tenho que fazer
    // é usar as tecnicas de HMTL com JS.

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='>${msg}'</p>
    `
    msgDiv.innerHTML += msgParaTela;

    // O timeout ocorre depois que o tempo passado para ele
    // E executa o que esta dentro da function, no nosso caso
    // ele limpa a msgDiv para tirar da tela depois de 3000ms ou 3s.
    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}