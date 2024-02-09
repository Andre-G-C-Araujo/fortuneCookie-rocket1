const imageCookie = document.querySelector(".imgCookie");
const buttonAnotherCookie = document.querySelector(".anotherCookie");
const body = document.querySelector("body");
const showMessage = document.querySelector(".underText");

const openCookieByClick = () => {
  const phraseArray = [
    "Se você realmente quer que aconteça, vá atrás e não desista.",
  ];

  if (imageCookie.classList.contains("openedCookie")) return;
  //image / change pic
  buttonAnotherCookie.classList.remove("hidden");
  imageCookie.classList.add("openedCookie");
  // when you open a cookie = open mode
  body.classList.toggle("openMode");

  // h3

  const numeroAle = Math.round(Math.random() * 1);

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
