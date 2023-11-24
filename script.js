const container = document.getElementById("container");
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector("#login");

registerBtn.addEventListener("click", () => {
  console.log("active");
  container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
