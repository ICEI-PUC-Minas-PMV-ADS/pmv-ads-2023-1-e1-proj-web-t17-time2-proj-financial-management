var tipoAdicao = document.getElementsByName("tipo-adicao");
var adicaoTitulo = document.getElementById("adicao-titulo");
var adicaoLista = document.getElementById("adicao-lista");

function addAdicao() {
  var descricaoInput = adicaoLista.querySelector("input[name='adicao_descricao[]']");
  var valorInput = adicaoLista.querySelector("input[name='adicao_valor[]']");
  
  if (descricaoInput.value && valorInput.value) {
    var novaAdicao = document.createElement("li");
    novaAdicao.innerHTML = '<input type="text" name="adicao_descricao[]" placeholder="Descrição"><input type="number" name="adicao_valor[]" placeholder="Valor">';
    adicaoLista.appendChild(novaAdicao);
  }
}

tipoAdicao.forEach(function(botao) {
  botao.addEventListener("change", function() {
    if (botao.value === "receita") {
      adicaoTitulo.innerHTML = "Adicionar receita";
    } else if (botao.value === "despesa") {
      adicaoTitulo.innerHTML = "Adicionar despesa";
    }
  });
});

var addAdicaoButton = document.getElementById("add-adicao");
addAdicaoButton.addEventListener("click", addAdicao);