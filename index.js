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
