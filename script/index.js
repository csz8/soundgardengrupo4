//Incluir html com o código do modal

const sectionIndex = document.querySelector("main");
console.log(sectionIndex);

atualizaIndex => {
    sectionIndex.innerHTML += `<div class="modal">
<div class="modal-topo">
    <h2>Reserva de Ingresso</h2>
    <span class="fechar-modal">x</span>
</div>
<div class="modal-corpo">
    <form action="">
        <label for="name">Nome Completo</label><br>
        <input type="text" id="nome-modal" name="nome-modal" placeholder="digite seu nome aqui"><br>
        <label for="mail">E-mail</label><br>
        <input type="email" id="email-modal" name="email-modal" placeholder="digite seu e-mail aqui"><br>
        <input type="submit" id="confirmar-reserva" value="Reservar Agora">
    </form>
    <p>Ao clicar no botão você confirmará sua reserva para o evento.</p>
</div>
</div>`;
}
console.log(sectionIndex);