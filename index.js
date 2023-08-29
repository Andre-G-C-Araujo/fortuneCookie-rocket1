const imageCookie = document.querySelector(".imgCookie");
const buttonAnotherCookie = document.querySelector(".anotherCookie");
const body = document.querySelector("body");
const showMessage = document.querySelector(".underText");

const openCookieByClick = () => {
  if (imageCookie.classList.contains("openedCookie")) return;
  //image / change pic
  buttonAnotherCookie.classList.remove("hidden");
  imageCookie.classList.add("openedCookie");

  // when you open a cookie = open mode
  body.classList.toggle("openMode");

  // h3
  showMessage.innerText = "";
  setTimeout(() => {
    showMessage.classList.toggle("showMessage");
  }, 2000);
  setTimeout(() => {
    showMessage.innerText =
      "A arte de ser louco é jamais cometer a loucura de ser um sujeito normal";
  }, 4000);
};

buttonAnotherCookie.addEventListener("click", (event) => {
  imageCookie.classList.remove("openedCookie");
  showMessage.innerText = "";
  buttonAnotherCookie.classList.add("hidden");
});
