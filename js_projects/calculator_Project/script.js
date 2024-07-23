let btns = document.querySelectorAll("button");

btns.forEach(b => {
    b.addEventListener("click", clickBtn)
});

let ac = document.querySelector("#ac");
ac.removeEventListener("click", clickBtn);
ac.addEventListener("click", clear);


let eq = document.querySelector("#eq");
eq.removeEventListener("click", clickBtn);
eq.addEventListener("click", calculate);

let dl = document.querySelector("#dl");
dl.removeEventListener("click", clickBtn);
dl.addEventListener("click", deleteEl);

dl.addEventListener('click', deleteEl)


function calculate() {
    let valueEl = document.querySelector(".value");
    try {
        valueEl.textContent = eval(valueEl.textContent);
    }
    catch (error) {
        textContent.value = "Error"
    }
}

function clear() {
    document.querySelector(".value").textContent = "";
}

function deleteEl() {
    let dl = document.querySelector(".value");
    dl.textContent = dl.textContent.slice(0, - 1)
}

function clickBtn() {
    document.querySelector(".value").textContent += this.textContent;
}