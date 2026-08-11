const botoes = document.queryselectorAll("button");

botoes.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click",botaoClicado);
  function boataoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent = parseInt(texto.textContent) + 1;
      curtiu = true;
    } else { 
    texto.textContent = parceInt(texto.textContent) -1;
      curtiu = false;
    }
  }
})
