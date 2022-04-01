const sectionIndex = document.querySelector(".container.text-center");
console.log(sectionIndex);

sectionIndex.innerHTML = `
<div class="container text-center ">
<h2>Próximos eventos</h2>
</div>

<div class="modal">

        <header>
            <h2>Reserva de Ingresso</h2>
            <span class="fechar-modal">x</span>
        </header>

        <div class="corpo-modal">
            <form action="">

                <label for="name">Nome Completo</label><br>
                <input type="text" id="nome-modal" name="nome-modal" placeholder="digite seu nome aqui"><br>

                <label for="mail">E-mail</label><br>
                <input type="email" id="email-modal" name="email-modal" placeholder="digite seu e-mail aqui"><br>

                <input type="submit" id="confirmar-reserva" value="Reservar Agora">

            </form>

            <p>Ao clicar no botão você confirmará sua reserva para o evento.</p>

        </div>
    </div>
`;
console.log(sectionIndex);

const botaoModal = document.querySelectorAll(".btn.btn-primary");
console.log(botaoModal);

for(const btnModalEl of botaoModal){
    btnModalEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Fui clicado!");
});
}

function abreModal() {
  const modal1 = document.querySelector(".modal");
  modal1.classList.add("visivel");
}
abreModal();