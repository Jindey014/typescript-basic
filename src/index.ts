const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let active: boolean = false

buttonElem.addEventListener("click", (): void => {
    console.log("I am clicked")
    if (active) {
        bodyElem.style.backgroundColor = ""
    } else {
        bodyElem.style.backgroundColor = "#CEBEBD"
    }

    active = !active;
})