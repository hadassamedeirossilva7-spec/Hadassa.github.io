// CONTADOR
let tempo = 0;
let contadorInterval = setInterval(() => {
    tempo++;
    document.getElementById("contador").innerText =
        "tempo esperando resposta: " + tempo + " segundos 😔";
}, 1000);


// MENSAGENS
const mensagens = [
    "ele é tímido 😔",
    "vc não respondeu ainda...",
    "ele tá ficando triste 💔",
    "última chance hein 😡",
    "já estamos interpretando como sim 👀",
    "isso aqui não é opcional não 😈"
];

let caosAtivado = false;
let mensagemInterval;
let tremorInterval;


// BOTÃO ORIGINAL
const naoBtn = document.getElementById("naoBtn");

naoBtn.addEventListener("mouseover", (e) => {
    fugir(e);

    if (!caosAtivado) {
        caosAtivado = true;
        iniciarCaos();
    }
});


// FUGA
function fugir(e) {
    const btn = e.target;

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}


// CAOS
let intervalo = 300;
let timeoutChuva;

function iniciarCaos() {

    // mensagens
    mensagemInterval = setInterval(() => {
        const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
        document.getElementById("mensagem").innerText = msg;
    }, 2000);

    // alerta
    setTimeout(() => {
        alert("RESPONDE LOGO 😡😡😡, desloga sua conta do computador menina, vão fazer covardia contigo. :)");
    }, 3000);

    // tremor
    tremorInterval = setInterval(() => {
        document.body.style.transform =
            `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
    }, 80);

    // criar botão
    function criarFakeNao() {
        const fake = document.createElement("button");
        fake.innerText = "RECUSAR 😡";
        fake.className = "recusar";

        document.body.appendChild(fake);

        fake.style.position = "fixed";
        fake.style.left = Math.random() * window.innerWidth + "px";
        fake.style.top = Math.random() * window.innerHeight + "px";

        fake.addEventListener("mouseover", fugir);
    }

    // chuva controlada
    function chuvaDeNao() {
        for (let i = 0; i < 5; i++) {
            criarFakeNao();
        }

        if (intervalo > 50) {
            intervalo -= 10;
        }

        timeoutChuva = setTimeout(chuvaDeNao, intervalo);
    }

    chuvaDeNao();

    // auto aceitar (40s)
    setTimeout(() => {
        aceitou();
    }, 40000);
}


// FINAL
function aceitou() {

    // 🔥 PARA TUDO
    clearInterval(contadorInterval);
    clearInterval(mensagemInterval);
    clearInterval(tremorInterval);
    clearTimeout(timeoutChuva);

    // remove TODOS os botões "recusar"
    document.querySelectorAll(".recusar").forEach(btn => btn.remove());

    // limpa transform
    document.body.style.transform = "none";

    // tela final
    document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;">
            <h1 style="color:#ff69b4;text-align:center;">
                💘 PABENS 💘<br>
                agora voce namora
            </h1>
        </div>
    `;
}
