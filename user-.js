// Cria um objeto JSON para armazenar as movimentações
var movimentacoes = [
    {
      "nome": "matheus"
    }
  ];
  
  // Função para cadastrar um nova movimentação
  function cadastrarmov() {
    // Obtém os dados do novo usuário do formulário
    var tipo = document.getElementById("tipo").value;
    var descricaomov = document.getElementById("desc").value;
    var valuemov = document.getElementById("valuemov").value;
    var datemov = document.getElementById("datemov").value;
    var nicho = document.getElementById("nicho").value;
    
  
    // Cria um objeto JSON com os dados do novo usuário
    var novaMov = {
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
    cadastrarmov(); // chama a função que cadastra o usuário
    // opcionalmente, você pode redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso aqui
  });
  
  console.log(movimentacoes)
  
  