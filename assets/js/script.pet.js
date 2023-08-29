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
function cadastrarPet() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    // Para isso, vamos criar uma variável para cada input.
    let tutor = document.getElementById("input-tutor").value;
    let nomePet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;

    // Vamos dar um console ou verbo consolar para cada variável.
    console.log("Tutor:" + tutor);
    console.log("Nome do Pet:" + nomePet);
    console.log("Espécie:" + especie);
    console.log("Foto:" +  foto);
    console.log("Data de Nascimento:" + data);
    

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

// Agora temos os dados validados, se estao vazios ou nao.
// Temos os valores dos inputs passando para as variaveis
// Agora eu preciso criar a classe no singular
// Ou seja, se estou trabalhando com Jogos, agora eu crio a Jogo.

//Sintaxe da class
class Pet {
    // Apos criar a class, eu preciso criar o meu construtor.
    // E nele, eu irei passar todas as propriedados, exceto: array e 
    // propriedades que serao calculadas por alguma funcao/metodo que eu 
    // desenvolva.
    constructor(tutor, nomedoPet, especie, foto,data) {
        // fazer as referencias das variaveis, utilizando o this.
        // e aqui que irá aparecer tbm os: arrays(se precisar)
        // e as propriedades que serao calculadas com alguma funcao/metodo.
        this.tutor = tutor;
        this.nomedoPet = nomedoPet;
        this.especie = especie;
        this.foto = foto;
        this.data = data;

        // Apos criar o construtor, vericar se ele esta funcionando.
    }
}
// Verificacao do Objeto Jogo, instacia ou criar.
// Criar um objeto com o tipo dele e uma variavel do nome que eu preferir.
// sempre const.

//const petTeste = new Pet("tutor", "12", "Desc", "steam", "link");
// Apos criar esse objeto, eu dou um console para verificar
// Se ele esta sendo montado.
//console.log(petTeste)
// Se meu objeto estiver no console, meu construtor esta OK.

//Se OK, eu agora vou compor o meus jogo, como?
// Eu pego os valores dos inputs e instancio um objeto do tipo
// jogo, porém eu tenho que ser generico.

function comporPet() {
    // Para compor meu JOGO eu preciso pegar os valores dos inputs.
    // Para isso, eu preciso criar uma variavel para cada input.

    let tutor = document.getElementById("input-tutor").value;
    let nomePet = document.getElementById("input-preco").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let foto = document.getElementById("input-foto").value;

    // Agora eu preciso instanciar/montar um objeto do tipo Jogo.
    // Só que ao inves de digitar os valores manualmente, eu vou
    // pegar os valores das variaveis.
    const pet = new Pet(tutor, nomePet, especie, data, foto);

    //Agora vou testar se meu objeto esta pegando os valores do input e sendo
    //montado

    console.log(pet);

    // Agora eu preciso armazenar esse jogo, em uma lista.
    // Entao eu preciso criar uma class de lista de jogos.

    //Apos criada, eu volto e uso o metodo add aqui.
    bibliotecaPets.add(pet);

    // Apos adicionar na lista, eu volto para instacia da class e dou 
    // um console.log nela, para ver se minha lista esta sendo criada.

    //Exibir usando minha funcao de render
    renderizarConteudo();
}

