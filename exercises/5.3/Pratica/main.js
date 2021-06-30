const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

//Exercício1

divUm.addEventListener('mouseover', classTech);
divDois.addEventListener('mouseover', classTech);
divTres.addEventListener('mouseover', classTech);

divUm.addEventListener('mouseleave', removeTech);
divDois.addEventListener('mouseleave', removeTech);
divTres.addEventListener('mouseleave', removeTech);

function classTech (event) {
  event.target.classList.add('tech');
  console.log(event.target);
};

function removeTech (event) {
  event.target.classList.remove("tech");
  console.log(event.target);
};

//Exercicio2

input.addEventListener('input', inputText);

function inputText () {
  let textValue = input.value;
  divUm.innerText = textValue;

  divUm.classList.add('tech');
};

//Exercicio3

divTres.addEventListener('dblclick', redirect);

function redirect () {
  window.location.assign('https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809');
};

//Exercicio4

divTres.addEventListener('mouseover', mudaCor);

function mudaCor (event) {
  event.target.style.backgroundColor = 'red';
};

divTres.addEventListener('mouseleave', voltaCor);

function voltaCor (event) {
  event.target.style.backgroundColor = '#41197f';
};

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.