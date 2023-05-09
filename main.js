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












// Cadastro


var link = document.getElementById("button_register");

// adicionar um evento de clique à âncora
link.addEventListener("click", function(event) {
  event.preventDefault(); // previne o comportamento padrão da âncora
  minhaFuncao(coletarDados); // chama a função desejada
});



function coletarDados() {

var name_register = document.getElementById('name_register').value;
var cpf_register = document.getElementById('cpf_register').value;
var year_register = document.getElementById('year_register').value;
var telephone_register = document.getElementById('telephone_register').value;
var email_register = document.getElementById('email_register').value;
var password_register = document.getElementById('password_register').value;
var confirmation_password_register = document.getElementById('confirmation_password_register').value;


// criar um objeto JSON com os dados

var novoItem = {
    "user" : name_register,
    "ID" : cpf_register,
    "year" : year_register,
    "telephone" :  telephone_register,
    "email" : email_register,
    "password" : password_register,
    "confirm_password" : confirmation_password_register
  };

  // carregar o arquivo JSON existente

  fetch('./app.db/banco_de_user.json')
    .then(response => response.json())
    .then(data => {
      // adicionar o novo objeto JSON ao array de objetos existente
      data.push(novoItem);

      // escrever os dados atualizados no arquivo JSON local
      var dadosAtualizados = JSON.stringify(data);
      var file = new Blob([dadosAtualizados], {type: 'application/json'});
      var url = URL.createObjectURL(file);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'banco_de_dados.json';
      link.click();
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });

}