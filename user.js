// Capturar o ID da URL
// Obter os parâmetros da URL
var urlParams = new URLSearchParams(window.location.search);

// Extrair o valor do ID
var userID = urlParams.get('id');

console.log("ID do usuário:", userID);



// Cria um objeto JSON para armazenar as movimentações
var movimentacoes = [
  {
    "id": 123, 
    "tipo": "receita",
    "descricao": "teste",
    "valor": 1500,
    "datamov": "test",
    "classificao": "teste"
  },

  {
    "id": 123, 
    "tipo": "despesa",
    "descricao": "teste",
    "valor": 3500,
    "datamov": "test",
    "classificao": "teste"
  },

  {
    "id": 123, 
    "tipo": "receita",
    "descricao": "teste",
    "valor": 2500,
    "datamov": "test",
    "classificao": "teste"
  },

  {
    "id": 11111111111, 
    "tipo": "despesa",
    "descricao": "teste",
    "valor": 7500,
    "datamov": "test",
    "classificao": "teste"
  }
];


// Função para cadastrar um nova movimentação
function cadastrarmov() {
  // Obtém os dados do novo usuário do formulário
  var tipo = document.getElementById("tipo").value;
  var descricaomov = document.getElementById("desc").value;
  var valuemov = parseFloat(document.getElementById("valuemov").value);
  var datemov = document.getElementById("datemov").value;
  var nicho = document.getElementById("nicho").value;
  

  // Cria um objeto JSON com os dados do novo usuário
  var novaMov = {
    "id": userID, 
    "tipo": tipo,
    "descricao": descricaomov,
    "valor": valuemov,
    "datamov": datemov,
    "classificao": nicho
  };

  // Adiciona o novo usuário ao objeto JSON de usuários
  movimentacoes.push(novaMov);

  // Armazena o objeto JSON de usuários no localStorage
  localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes)); 
}

var cadastrarmovte = document.getElementById("register_mov");
cadastrarmovte.addEventListener("click", function(event) {
  alert('cadastrado com sucesso')
  event.preventDefault(); // impede que o link abra uma nova página
  calculate();
  cadastrarmov(); // chama a função que cadastra o valor
  // opcionalmente, você pode redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso aqui
});











var movimentacoesReceita = movimentacoes.filter(function(movimentacao) {
  return movimentacoes.id === userID;
});




console.log(movimentacoesReceita)







console.log(movimentacoes)


function calculate() {
  var totalReceitas = 0;
  var totalDespesas = 0;

  for (var i = 0; i < movimentacoes.length; i++) {
    var movimentacao = movimentacoes[i];
    
    if (movimentacao.tipo === "receita") {
      totalReceitas += movimentacao.valor;
    } else if (movimentacao.tipo === "despesa") {
      totalDespesas += movimentacao.valor;
    }
  }

  var resultado = totalReceitas - totalDespesas;
  var cardResultado = document.getElementById("cardResultado");
  cardResultado.innerHTML = "Saldo: " + resultado;
}


