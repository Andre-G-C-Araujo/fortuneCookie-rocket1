const imageCookie = document.querySelector(".imgCookie");
const buttonAnotherCookie = document.querySelector(".anotherCookie");
const body = document.querySelector("body");
const showMessage = document.querySelector(".underText");

const openCookieByClick = () => {
  const phraseArray = [
    "A persistência realiza o impossível.",
    "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "Pequenos gestos podem ter grandes impactos.",
    "O verdadeiro conhecimento é saber que você não sabe tudo.",
    "O passado só define o seu futuro se você permitir. ",
    "A mente é como um paraquedas, só funciona se estiver aberta.",
    "Seja a versão da qual você vai se orgulhar no futuro. ",
    "O ignorante afirma, o sábio duvida, o sensato reflete.",
    "as coisas que nos arrependeremos serão as decisões que não tomamos.",
    "Deixe pra trás o que não te leva pra frente.",
    "Praticar a compaixão, o amor e o carinho é a forma mais pura de cuidar da humanidade.",
    "Quando o dia está cinza, seja o seu próprio arco-íris.",
    "Os obstáculos são apenas oportunidades disfarçadas para deixar você mais forte.",
    "Faça valer a pena, as oportunidades não voltam.",
    "Tentar acertar realizando os mesmos erros é o mais claro sinal de insanidade.",
    "As palavras podem mentir, mas as atitudes sempre falam a verdade.",
    "A motivação é o que ajuda a começar. O hábito é o que faz seguir adiante.",
    "O seu maior professor é o seu maior erro.",
    "Se você realmente quer que aconteça, vá atrás e não desista.",
    "Tudo vem com um propósito, vai por uma razão e fica o essencial.",
    "Decisões são assim, ou você arrisca, ou você se conforma.",
    "O homem superior atribui a culpa a si próprio; o homem comum aos outros",
    "Quando se está no fundo poço, voce aprende a olhar para cima",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  ];

  if (imageCookie.classList.contains("openedCookie")) return;
  //image / change pic
  buttonAnotherCookie.classList.remove("hidden");
  imageCookie.classList.add("openedCookie");
  // when you open a cookie = open mode
  body.classList.toggle("openMode");

  // h3

  const numeroAle = Math.round(Math.random() * 24);

  phraseArray.map((item, index) => {
    console.log(phraseArray.length);
    if (numeroAle === index) {
      showMessage.innerText = "";
      setTimeout(() => {
        showMessage.classList.toggle("showMessage");
      }, 2000);
      setTimeout(() => {
        showMessage.innerText = `${item}`;
      }, 4000);
    }
  });

  // showMessage.innerText = "";
  // setTimeout(() => {
  //   showMessage.classList.toggle("showMessage");
  // }, 2000);
  // setTimeout(() => {
  //   showMessage.innerText = `${item}`;
  // }, 4000);
};

buttonAnotherCookie.addEventListener("click", (event) => {
  imageCookie.classList.remove("openedCookie");
  showMessage.innerText = "";
  buttonAnotherCookie.classList.add("hidden");
  body.classList.toggle("openMode");
  showMessage.classList.toggle("showMessage");
});
