  /*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})



// botão de fechar a tela de login

var botaofechar = document.getElementById('button-close')


function ocultarElemento() {
  document.getElementById('login').style.display = "none";
}

botaofechar.addEventListener("click", ocultarElemento)

// Botão de abrir a tela de login

var botaoabrir = document.getElementById('button-open')

function mostrarElemento() {
  document.getElementById('login').style.display = "block";
}

botaoabrir.addEventListener("click", mostrarElemento)




var botaoentrarlogin = document.getElementById('retornarparalogin')


function retornarlogin() {
  document.getElementById('login').style.display = "block";
  document.getElementById('cadastro').style.display = "none";
}


botaoentrarlogin.addEventListener("click", retornarlogin)



// botão de fechar a tela de cadastro

var botaofecharcadastro = document.getElementById('button-close-cadastro')


function ocultarElementocadastro() {
  document.getElementById('cadastro').style.display = "none";
}

botaofecharcadastro.addEventListener("click", ocultarElementocadastro)

// Botão de abrir a tela de cadastro

var botaoabrircadastro = document.getElementById('linkcadastro')

function mostrarElementocadastro() {
  document.getElementById('cadastro').style.display = "block";
  document.getElementById('login').style.display = "none";
}

botaoabrircadastro.addEventListener("click", mostrarElementocadastro)

// Cria um objeto JSON para armazenar os usuários cadastrados
var usuarios = [
  {
    "nome": "nome",
    "id": "123",
    "year": "year",
    "tel": "telephone",
    "email": "email",
    "senha": "123",
    "confirm_password": "123",
  }
];

// Função para cadastrar um novo usuário
function cadastrarUsuario() {
  // Obtém os dados do novo usuário do formulário
  var nome = document.getElementById("name_register").value;
	var cpf = document.getElementById("cpf_register").value;
	var year = document.getElementById("year_register").value;
  var telephone = document.getElementById("telephone_register").value;
  var email = document.getElementById("email_register").value;
  var password = document.getElementById("password_register").value;
  var confirmation_password = document.getElementById("confirmation_password_register").value;

  // Cria um objeto JSON com os dados do novo usuário
  var novoUsuario = {
    "nome": nome,
    "id": cpf,
    "year": year,
    "tel": telephone,
    "email": email,
    "senha": password,
    "confirm_password": confirmation_password
  };

  // Adiciona o novo usuário ao objeto JSON de usuários
  usuarios.push(novoUsuario);

  // Armazena o objeto JSON de usuários no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Exibe uma mensagem de sucesso ao usuário
  alert("Usuário cadastrado com sucesso!");
}

// Função para validar o login de um usuário
function logarUsuario() {
  // Obtém as credenciais do usuário do formulário
  var id = document.getElementById("cpf_login_user").value;
  var senha = document.getElementById("password_login_user").value;

  // Obtém o objeto JSON de usuários armazenado no localStorage
  var usuariosArmazenados = localStorage.getItem("usuarios");

  // Se o objeto JSON não existir, exibe uma mensagem de erro
  if (!usuariosArmazenados) {
    alert("Não há usuários cadastrados!");
    return;
  }

  // Converte o objeto JSON de usuários em um array de objetos
  var usuarios = JSON.parse(usuariosArmazenados);

  // Procura pelo usuário com as credenciais fornecidas
  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.id === id && usuario.senha === senha;
    
  });

  // Se o usuário for encontrado, exibe uma mensagem de sucesso
  if (usuarioEncontrado) {
    var url = "user-page.html?id=" + id;
    window.location.href = url;
  }
  // Caso contrário, exibe uma mensagem de erro
  else {
    alert("Credenciais inválidas!");
  }
}

var linkCadastro = document.getElementById("button_register");
linkCadastro.addEventListener("click", function(event) {
  event.preventDefault(); // impede que o link abra uma nova página
  cadastrarUsuario(); // chama a função que cadastra o usuário
  // opcionalmente, você pode redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso aqui
});

var linklogin= document.getElementById("login_entrar");
linklogin.addEventListener("click", function(event) {
  event.preventDefault(); // impede que o link abra uma nova página
  logarUsuario(); // chama a função que logar usuário
  
});




console.log(usuarios)
console.log(logarUsuario)












