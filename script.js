// CONTADOR
let tempo = 0;
setInterval(() => {
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

setInterval(() => {
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem").innerText = msg;
}, 2000);


// FUNÇÃO DE FUGA (serve pra TODOS os botões)
function fugir(e) {
    const btn = e.target;

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}


// BOTÃO ORIGINAL
const naoBtn = document.getElementById("naoBtn");
naoBtn.addEventListener("mouseover", fugir);


// SPAWN INSANO DE BOTÕES
function criarFakeNao() {
    const fake = document.createElement("button");
    fake.innerText = "RECUSAR 😡";
    fake.className = "recusar";

    document.body.appendChild(fake);

    // posição inicial aleatória
    fake.style.position = "fixed";
    fake.style.left = Math.random() * window.innerWidth + "px";
    fake.style.top = Math.random() * window.innerHeight + "px";

    // TODOS fogem
    fake.addEventListener("mouseover", fugir);
}

// aumenta o caos progressivamente
let intervalo = 300;

function chuvaDeNao() {
    for (let i = 0; i < 5; i++) {
        criarFakeNao();
    }

    // acelera cada vez mais
    if (intervalo > 50) {
        intervalo -= 10;
    }

    setTimeout(chuvaDeNao, intervalo);
}

chuvaDeNao();


// ALERT SURTADO
setTimeout(() => {
    alert("RESPONDE LOGO 😡😡😡");
}, 5000);


// TELA TREME MAIS FORTE
setInterval(() => {
    document.body.style.transform =
        `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
}, 80);


// ACEITAR AUTOMÁTICO (40s)
setTimeout(() => {
    aceitou();
}, 40000);


// FINAL ABSURDO
function aceitou() {
    document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;">
            <h1 style="color:#ff69b4;text-align:center;">
                💘 PABENS 💘<br><br>
                você tentou resistir...<br>
                mas falhou miseravelmente 😎<br><br>
                resposta enviada com sucesso ✔️<br><br>
                boa sorte agora 💀
            </h1>
        </div>
    `;
}