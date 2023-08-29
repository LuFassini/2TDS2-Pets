
console.log("O JS está linkado!");

function verificarInputs() {

    let tutor = document.getElementById("input-tutor").value;
    let nomePet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-foto").value;
    let data = document.getElementById("input-data").value;


    console.log("Titulo" + titulo);
    console.log("Nome do pet:" + nomePet);
    console.log("Espécie:" + especie);
    console.log("Foto:" + foto);
    console.log("Data:" + data);


    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "") {

        console.log("Os dados estao vazios");

        return true;
    } else {
        console.log("Os dados nao estao em branco");
        return false;
    }
}


class Pet {
    constructor(tutor, nomePet, especie, data, foto) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.data = data;
        this.foto = foto;
        this.age = this.calculateAge(data);
        console.log("Passou pelo constructor da class Pet");
    }

    calculateAge(birthdate) {
        let today = new Date();
        let birthdate_ = new Date(birthdate);
        console.log("Pedro", birthdate);
        let age = today.getFullYear() - birthdate_.getFullYear();
        let month = today.getMonth() - birthdate_.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate_.getDate())) {
            age--;
        }
        return age;
    
    }
    }

function cadastrarPet() {
    const tutor = document.getElementById("input-tutor").value;
    const nomePet = document.getElementById("input-nomePet").value;
    const especie = document.getElementById("input-especie").value;
    const foto = document.getElementById("input-foto").value;
    const data = document.getElementById("input-data").value;
    console.log(tutor);
    console.log(nomePet);
    console.log(especie);
    console.log(foto);
    console.log(data);

    petsList.adicionarPet(tutor, nomePet, especie, data, foto);

}


class PetsList {
    constructor() {
        this.pets = [];
    }

    adicionarPet(tutor, nomePet, especie, data, foto) {
        if (isAnyInputEmpty()) {
            sendMSG("Preencha todos os campos!", "error");
        } else if (!isURLValida(foto)) {
            sendMSG("URL da imagem inválida!", "error");
        }
        else {
            const pet = new Pet(tutor, nomePet, especie, data, foto);
            this.pets.push(pet);
            sendMSG("Pet adicionado ao sistema!", "success");
            clearInputs();
        }

    }

    
}
function exibirPets() {
    const petList = document.getElementById("containerLista");
    petList.innerHTML = "";

    petsList.pets.forEach(pet => {
        const cardDiv = `
                <div class="card">
                    <img src="${pet.foto}" alt="${pet.nomePet}">
                    <h2>Nome:${pet.nomePet}</h2>
                    <p>Tutor:${pet.tutor}</p>
                    <p>Espécie: ${pet.especie}</p>
                    <p>Data de Nascimento: ${pet.data}</p>
                    <p>Idade: ${pet.age}</p>
                </div>
            `;

        petList.innerHTML += cardDiv;
    });
}

const petsList = new PetsList();

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
function clearInputs() {

    document.getElementById("input-tutor").value = '';
    document.getElementById("input-nomePet").value = '';
    document.getElementById("input-especie").value = '';
    document.getElementById("input-foto").value = '';
    document.getElementById("input-data").value = '';
}
function sendMSG(msg, type) {

    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    const msgP = `
            <p class="${type}">${msg}</p>
        `;

    msgDiv.innerHTML += msgP;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}
function isAnyInputEmpty() {
    const tutor = document.getElementById("input-tutor").value;
    const nomePet = document.getElementById("input-nomePet").value;
    const especie = document.getElementById("input-especie").value;
    const foto = document.getElementById("input-foto").value;
    const data = document.getElementById("input-data").value;

    

    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "") {
        return true;
    } else {
        return false;
    }
}

function showRegister() {
    document.getElementById("subtitle").classList.add("hidden");
    document.getElementById("container").classList.add("hidden");
    document.getElementById("containerLista").classList.remove("hidden");
    exibirPets();
}

function showCadastro() {
    document.getElementById("subtitle").classList.remove("hidden");
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("containerLista").classList.add("hidden");
    

}