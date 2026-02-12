
const text = "Do Zero à Fluência";
const element = document.getElementById("typewriter");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

typeEffect();

document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá, meu nome é ${nome} (${email}) e minha mensagem é: ${mensagem}`;

  const numero = "5579999208053";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
    const texto = `Olá! 😊
    Meu nome é ${nome}
    Email: ${email}

    Mensagem:
    ${mensagem}`;

