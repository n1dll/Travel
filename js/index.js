const pics = document.querySelectorAll(".pic");
const form = document.querySelector(".input-container");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

pics.forEach(element => {
  element.addEventListener("click", e => e.preventDefault());
});

let timeoutID;

const debounce = (fn, delay) => {
  return function () {
    if (timeoutID) {
      clearInterval(timeoutID);
    }
    timeoutID = setInterval(() => {
      fn();
    }, delay);
  };
};

email.addEventListener(
  "keydown",
  debounce(() => {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (regex.test(email.value)) {
      msg.innerText = "Your email is valid";
      msg.style.color = "#004C8F";
      msg.style.fontWeight = "400";
    } else if (email.value === "") {
      msg.innerText = "";
    } else {
      msg.innerText = "Your email is Invalid";
      msg.style.color = "#830000";
      msg.style.fontWeight = "400";
    }
    console.log(email.value);
  }, 500)
);

email.addEventListener("focusout", () => {
  clearInterval(timeoutID);
});
