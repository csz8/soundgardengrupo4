//Listar eventos com ID

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const eventosLista = document.querySelector(".container.d-flex.justify-content-center.align-items-center.events");
const metodo = {
  method: "GET",
  redirect: "follow",
};

const listarEventos = async () => {
  const resposta = await fetch(`${BASE_URL}/events`, metodo);
  const conteudoResposta = await resposta.json();
  let novaLista = "";

  for (let index = 0; index < 3; index++) {
    novaLista = `<article class="evento card p-5 m-3"><h2>${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4>${conteudoResposta[index].attractions}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
        dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
        nobis in inventore tenetur asperiores.</p>
        <p>IdEvento: ${conteudoResposta[index]._id}</p>
    <a href="#" class="btn btn-primary">reservar ingresso</a>`;
  }
  eventosLista.innerHTML = novaLista;

  for (let index = 0; index < 2; index++) {
    novaLista = `<article class="evento card p-5 m-3"><h2>${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4>${conteudoResposta[index].attractions}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
        dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
        nobis in inventore tenetur asperiores.</p>
        <p>IdEvento: ${conteudoResposta[index]._id}</p>
    <a href="#" class="btn btn-primary">reservar ingresso</a>`;
  }
  eventosLista.innerHTML += novaLista;

  for (let index = 0; index < 1; index++) {
    novaLista = `<article class="evento card p-5 m-3"><h2>${conteudoResposta[index].name} - ${conteudoResposta[index].scheduled}</h2>
    <h4>${conteudoResposta[index].attractions}</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique,
        dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus
        nobis in inventore tenetur asperiores.</p>
        <p>IdEvento: ${conteudoResposta[index]._id}</p>
    <a href="#" class="btn btn-primary">reservar ingresso</a>`;
  }
  eventosLista.innerHTML += novaLista;

};

listarEventos();

//Ativar modal

const eventos = document.querySelectorAll("btn.btn-primary");

const modal = document.querySelector(".modal");
console.log(eventos);

for (let i = 0; i < eventos.length; i++) {
  eventos[i].addEventListener("click", (evento) => {
    evento.preventDefault();
  });
}

for (let i = 0; i < eventos.length; i++) {
  eventos[i].addEventListener("click", () => {
    modal.classList.add("-ativar");
  });
}

const btnModal = document.querySelectorAll(".btn-modal");
console.log(btnModal);

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", (evento) => {
    evento.preventDefault();
  });
}

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", () => {
    modal.classList.remove("-ativar");
  });
}


//Gerar reserva

