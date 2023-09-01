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
    "Esteja sempre um passo à frente dos seus concorrentes e meio passo atrás dos seus limites.",
    "Praticar a compaixão, o amor e o carinho é a forma mais pura de cuidar da humanidade.",
    "Quando o dia está cinza, seja o seu próprio arco-íris.",
    "Os obstáculos são apenas oportunidades disfarçadas para deixar você mais forte.",
    "Trabalhe duro em silêncio. Deixe que o sucesso faça barulho.",
    "Tentar acertar realizando os mesmos erros é o mais claro sinal de insanidade.",
    "Tentar evitar o fracasso é uma forma de fugir do êxito.",
    "A motivação é o que ajuda a começar. O hábito é o que faz seguir adiante.",
    "O seu maior professor é o seu maior erro.",
  ];

  if (imageCookie.classList.contains("openedCookie")) return;
  //image / change pic
  buttonAnotherCookie.classList.remove("hidden");
  imageCookie.classList.add("openedCookie");
  // when you open a cookie = open mode
  body.classList.toggle("openMode");

  // h3

  const numeroAle = Math.round(Math.random() * 9);

  phraseArray.map((item, index) => {
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
