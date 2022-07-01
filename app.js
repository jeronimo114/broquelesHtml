const chatIcon = document.querySelector(".chat-icon");
const ayudaChat = document.querySelector(".ayuda-chat");
const horariosChat = document.querySelector(".horarios-chat");
const asesorChat = document.querySelector(".asesor-chat");

chatIcon.onclick = function () {
  document.querySelector(".chat").style.display = "flex";
  btn1.style.display = "block";
  btn2.style.display = "block";
  btn3.style.display = "block";
  ayudaChat.style.display = "none";
  horariosChat.style.display = "none";
  asesorChat.style.display = "none";
};

document.querySelector(".close-chat").addEventListener("click", () => {
  document.querySelector(".chat").style.display = "none";
});

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.onclick = () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  ayudaChat.style.display = "block";
};
btn2.onclick = () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  horariosChat.style.display = "block";
};
btn3.onclick = () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  asesorChat.style.display = "flex";
};
// Get data from input and display it inside the card
const input = document.querySelector(".asesor-input");
const btn = document.querySelector(".button-send");
const card = document.querySelector(".asesor-chat");

btn.onclick = () => {
  const text = input.value;
  const p = document.createElement("p");
  p.innerHTML = text;
  card.appendChild(p);
  input.value = "";
};
