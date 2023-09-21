var botao = document.querySelector(".botao-enviar");
botao.addEventListener("click", () => {
    animarBarra();
})

function animarBarra() {
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    var barraProgresso = document.querySelector(".progress");
    barraProgresso.style.display = "flex";

    var intervalo = setInterval(() => {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            //document.querySelector(".alert").classList.add("show");
            MostrarAlerta();
        }
        else {
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 200)
}

function MostrarAlerta() {
    var nome = document.querySelector("#txtNome")
    var idade = document.querySelector("#txtIdade")
    var cidade = document.querySelector("#txtCidade")

    document.body.innerHTML += `
        <div class="alert alert-success fade show m-3">
            <div class="d-flex justify-content-between">
                <span>Bem-vindo! Olá, ${nome.value}, idade ${idade.value}, cidade ${cidade.value}</span>
                <span class="close" data-bs-dismiss="alert">&times;</span>
            </div>
        </div>
    `;

}