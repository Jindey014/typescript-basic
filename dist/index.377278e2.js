const buttonElem = document.querySelector(".clickMe");
const bodyElem = document.body;
let active = false;
buttonElem.addEventListener("click", ()=>{
    console.log("I am clicked");
    if (active) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#CEBEBD";
    active = !active;
});

//# sourceMappingURL=index.377278e2.js.map
