const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggleSm");

toggleButton.addEventListener("click", () =>{
	htmlElement.classList.toggle('dark');
})

toggleButtonSm.addEventListener("click", () =>{
	htmlElement.classList.toggle('dark');
})