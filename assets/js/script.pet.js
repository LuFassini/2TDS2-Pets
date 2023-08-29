
console.log("O JS está linkado!");

function petcontructor() {
    constructor(tutor, nomePet,especie, data, foto) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = this.especie;
        this.data = this.data;
        this.foto = this.foto;
        this.age = this.calculateAge();
        console.log("Passou pelo constructor da class Pet");
    }
 {

    }
}

function cadastrarPet() {

    let tutor = document.getElementById("input-tutor").value;
    let nomePet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;

    console.log("Tutor:" + tutor);
    console.log("Nome do Pet:" + nomePet);
    console.log("Espécie:" + especie);
    console.log("Foto:" +  foto);
    console.log("Data de Nascimento:" + data);
    
    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "") {
        console.log("Os dados estao vazios");
        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}

calculateAge() {
    let today = new Date();
    let birthdate = new Date(this.birthdate);
    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    console.log("Passou pelo calculateAge() da class User");
    return age;
}
    
    function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

class petList {
    constructor() {
        this.pets= [];
    }

    adicionarPet(tutor, nomePet, especie, foto, data) {
        if (isAnyInputEmpty()) {
            sendMSG("Preencha todos os campos!", "error"); 
        }else if(!isURLValida(imagem)){
            sendMSG("URL da imagem inválida!", "error");
        }
        else{
            const pet = new Pet(tutor, nomePet, especie, foto, data);
            this.pets.push(pet);
            sendMSG("Pet adicionado com sucesso!", "success");
            clearInputs();
        }
}
}
// Função para exibir jogos
function exibirPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";

    petsList.pets.forEach(pet => {
        const cardDiv = `
            <div class="card">
                <img src="${pet.imagem}" alt="${pet.nomePet}">
                <h2>Tutor:${pet.tutor}</h2>
                <p>Nome do Pet: R${pet.nomePet}</p>
                <p>Espécie: ${pet.especie}</p>
                <p>Data de Nascimento: ${pet.data}</p>
            </div>
        `;

        petList.innerHTML += cardDiv;
    });
}
const petsList = new PetsList();

function adicionarPet() {
    const tutor = document.getElementById("tutor").value;
    const nomePet = document.getElementById("nomePet").value;
    const especie = document.getElementById("especie").value;
    const foto = document.getElementById("foto").value;
    const data = document.getElementById("data").value;

    petsListList.adicionarPet(tutor, nomePet, especie, foto, data);

    exibirPets();
}



