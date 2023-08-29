
console.log("O JS está linkado!");

    class Pet {
    constructor(tutor, nomePet,especie, data, foto) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = this.especie;
        this.data = this.data;
        this.foto = this.foto;
        this.age = this.calculateAge();
        console.log("Passou pelo constructor da class Pet");
    }
 }
     function cadastrarPet() {
    const tutor = document.getElementById("tutor").value;
    const nomePet = document.getElementById("nomePet").value;
    const especie = document.getElementById("especie").value;
    const foto = document.getElementById("foto").value;
    const data = document.getElementById("data").value;

    petsList.adicionarPet(tutor, nomePet,especie, foto,data);

    exibirPets();
}
    class PetsList {
        constructor() {
            this.pets = [];
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
                sendMSG("Pet adicionado ao sistema!", "success");
                clearInputs();
            }
    
        }
        
            calculateAge () {
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
    }
        function exibirPets() {
        const petList = document.getElementById("petList");
        petList.innerHTML = "";
    
        petsList.pets.forEach(pet => {
            const cardDiv = `
                <div class="card">
                    <img src="${pet.foto}" alt="${pet.nomePet}">
                    <h2>${pet.nomePet}</h2>
                    <p>Tutor: R$${pet.tutor}</p>
                    <p>Espécie: ${pet.especie}</p>
                    <p>Data de Nascimento: ${pet.data}</p>
                </div>
            `;
    
            petList.innerHTML += cardDiv;
        });
    }
    
    const petsList = new PetsList();

    function isURLValida(url) {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
            return true;
        } else {
            return false;
        }
    }
    function clearInputs(){
        
        document.getElementById("tutor").value = "";
        document.getElementById("nomePet").value = "";
        document.getElementById("especie").value = "";
        document.getElementById("foto").value = "";
        document.getElementById("data").value = "";
    }
    function sendMSG(msg,type){  
    
        const msgDiv = document.getElementById("msg");
        msgDiv.innerHTML = "";
    
        const msgP = `
            <p class="${type}">${msg}</p>
        `;
    
        msgDiv.innerHTML += msgP;
    
        setTimeout(function(){
            msgDiv.innerHTML = "";
        }, 3000);
    }
    function isAnyInputEmpty(){
        const tutor = document.getElementById("tutor").value;
        const nomePet = document.getElementById("nomePet").value;
        const especie = document.getElementById("especie").value;
        const foto = document.getElementById("foto").value;
        const data = document.getElementById("data").value;
    
        if(tutor == "" || nomePet == "" || especie == "" || foto == "" || data == ""){
            return true;
        } else {
            return false;
        }
    }