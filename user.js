// Capturar o ID da URL
// Obter os parâmetros da URL
var urlParams = new URLSearchParams(window.location.search);

// Extrair o valor do ID
var userID = urlParams.get('id');

// Cria um objeto JSON para armazenar as movimentações
var movimentacoesbd = [
  {}
];

// Filtrar as movimentações com base no userID
var filteredMovimentacoes = movimentacoesbd.filter(function(movimentacoesbd) {
  return movimentacoesbd.id === Number(userID);
});

// Retornar apenas os valores relevantes das movimentações
var movimentacoes = filteredMovimentacoes.map(function(movimentacoesbd) {
  return {
    tipo: movimentacoesbd.tipo,
    descricao: movimentacoesbd.descricao,
    valor: movimentacoesbd.valor,
    datamov: movimentacoesbd.datamov,
    classificao: movimentacoesbd.classificao
  };
});

console.log(movimentacoes);


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
  event.preventDefault(); // impede que o link abra uma nova página
  calculate();
  cadastrarmov(); // chama a função que cadastra o valor
  // opcionalmente, você pode redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso aqui
});











var movimentacoesReceita = movimentacoes.filter(function(movimentacao) {
  return movimentacoes.id === userID;
});




// console.log(movimentacoesReceita)







// console.log(movimentacoes)


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

var usuarios = [
  {}
]; // IDs dos usuários que você deseja filtrar

var movimentacoesFiltradasPorUsuario = {};

usuarios.forEach(function(userId) {
  var movimentacoesUsuario = movimentacoes.filter(function(movimentacao) {
    return movimentacao.id === userId;
  });

  movimentacoesFiltradasPorUsuario[userId] = movimentacoesUsuario;
});

console.log(movimentacoesFiltradasPorUsuario);


