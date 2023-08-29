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
    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "") {
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
    constructor(tutor, nomePet, especie, foto,data) {
        // fazer as referencias das variaveis, utilizando o this.
        // e aqui que irá aparecer tbm os: arrays(se precisar)
        // e as propriedades que serao calculadas com alguma funcao/metodo.
        this.tutor = tutor;
        this.nomePet = nomePet;
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

class ListaPets {
    // Apos criar a class, eu preciso criar o meu construtor.
    // E nele, eu irei passar todas as propriedados, exceto: array e 
    // propriedades que serao calculadas por alguma funcao/metodo que eu 
    // desenvolva.
    constructor() {
        // Como será uma lista, eu preciso criar um this.listaQualquer
        // Com um array vazio.
        this.listaPetsArray = [];
    }

    // A lista sempre será uma class de acao, logo vou precisar
    // de metodos, qual seria o primeiro metodo de acao?
    // O primeiro e mais importante metodo é conseguir adicionar
    // algo nessa lista, no nosso caso add Jogo em Lista de Jogos.

    //Sintaxe dessa classe, o nome(){}

    // Quando eu vou adicionar algo, eu preciso saber o que, logo
    // eu uso parametro.
    add(parametro) {
        // Entao precisamos pegar o jogo que foi composto lá na linha 117.
        // E dar um push no array que foi criado na linha 136.
        // this.listaJogos.push(parametro);
        // parametro é quem?
        // o jogo, que foi instanciado na linha 117.

        // E apos criar esse metodo, agora eu volto para a funcao
        // comporJogo e uso após a instancia a acao/metodo add.
        // Mas antes eu preciso ter uma listaJogos instanciada de forma
        // global., criei ela na linha seguinte da class.

        //Aqui faremos as verificacoes, antes de adicionar jogo, dentro
        // do array, usando as funcoes que temos de acoes.
        if (cadastrarPet()) {
            envieMsg("Preencha todos os campos", "erro");
        } else {
            this.listaPetsArray.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.listaPetsArray);
        }
    }
}
// Criar/Instanciar minha lista de jogos.
const bibliotecaPets = new ListaPets();
// Console que verifica se minha lista esta sendo criada.
console.log(bibliotecaPets);
// Após cadastrar um jogo, eu posso direto no console, digitar o nome da lista
// para verificar se esta cadastrando.

// Criar uma funcao que nos auxilia, e limpa todos os campos para mim
// Uso ela sempre que precisar.

function limparInputs() {
    console.log("Usei a funcao de limparInputs");

    //Pego o valor dela, e defino como vazio.
    document.getElementById("input-tutor").value = '';
    document.getElementById("input-nomePet").value = '';
    document.getElementById("input-especie").value = '';
    document.getElementById("input-foto").value = '';
    document.getElementById("input-data").value = '';
}


// Tendo certeza que o meu array/lista de algo, esta sendo construida
// e armazenando todos os itens.
// Entao, eu crio uma funcao que fica responsavel por colocar/renderizar
// os itens de dentro do meu objeto na tela.


function renderizarConteudo() {
    // Variavel para armazenar o innerHMTL, que é
    // responsavel por renderizar na tela

    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    // Faça meu laço de repeticao, que cria um elemento HTML para
    // cada elemento do meu objeto. Usando de preferencia o forEach.

    //Preciso pegar minha lista/array de objetos, no nosso caso: Jogos.
    let array = bibliotecaPets.listaPetsArray;

    //Verificar se meu array esta vindo certo.
    console.log(array);

    //Aqui no for each, o meu elemento é jogo, ou seja o singular 
    // dos itens que eu tenho dentro do array. No nosso caso, array tem 
    // jogos, entao usamos jogo.
    array.forEach(pet => {
        //crio uma div em html, dentro do JS mesmo.
        // Que vai ser colocada dentro da div, que esta esperando
        // no html.
        const PetDiv = `
            <!--
                Comentario:
                Crio a div, com class para usar depois no CSS
                E passo os valores que estao no meu objeto 
                para cada propriedade/elemento do HTML
            -->
            <div class='jogoDetalhe'>
                <h2>Tutor: ${pet.tutor}</h2>
                <p>Nome do Pet: R$${pet.nomePet}</p>
                <p>Espécie: ${pet.especie}</p>
                <p>Data: ${pet.data}</p>
                <img src="${pet.foto}" alt="${pet.nomePet}">
            </div>
       `;

        listaHTML.innerHTML += petDiv;
    });
}

function showPets() {
    console.log("Passou pela funcao showPets()");

    if (pet.addAll().length == 0) {
        sendErrorMsg("Não há pets cadastrados");
        return;
    } else {
        document.getElementById("container").petList.remove("hidden");
        document.getElementById("input-continer").petList.add("hidden");
        document.getElementById("titulo-principal").petList.add("hidden");

        console.log(pet.getAll());

        const users = allUsers.getAll();

        let html = "";
        users.forEach((pet) => {
            html += `
            <div class="list-eachPet">
                <p><strong>Tutor:</strong> ${pet.tutor}</p>
                <p><strong>Nome do Pet:</strong> ${pet.nomePet}</p>
                <p><strong>Espécie:</strong> ${pet.especie}</p>
                <p><strong>Foto:</strong> ${pet.foto}</p>
                <p><strong>Data de nascimento:</strong> ${dateinPTBR(pet.data)}</p>
            </div>
           `;
        });
        document.getElementById("pet-list").innerHTML = html;
    }
    const contador = allUsers.countNumber()
    document.getElementById("contador").innerHTML = `Total: ${contador}`;
}