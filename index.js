const imageCookie = document.querySelector(".imgCookie");
const buttonAnotherCookie = document.querySelector(".anotherCookie");
const body = document.querySelector("body");
const showMessage = document.querySelector(".underText");

const openCookieByClick = () => {
  //image / change pic
  buttonAnotherCookie.classList.toggle("hidden");
  imageCookie.classList.toggle("openedCookie");

  // when you open a cookie = open mode
  body.classList.toggle("openMode");

  // h3
  showMessage.innerText = "";
  setTimeout(() => {
    showMessage.classList.toggle("showMessage");
  }, 2000);
  setTimeout(() => {
    showMessage.innerText =
      "A Arte de ser louco é jamais cometer a loucura de ser um sujeito normal ";
  }, 4000);
};
