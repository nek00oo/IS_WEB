const container = document.getElementById("container");
const registerBtn = document.getElementById("sign-up");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
    console.log("click");
})

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
})