// INPUTS
const dayI = document.getElementById("day");
const monthI = document.getElementById("month");
const yearI = document.getElementById("year");

// OUTPUTS
const dayO = document.getElementById("DD");
const monthO = document.getElementById("MM");
const yearO = document.getElementById("YY");

// FORM
const form = document.querySelector("form");

// EVENTLISTENER
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "Campo requerido.";
            validator = false;
        } else if (monthI.value > 12) {
            monthI.style.borderColor = "red";
            monthI.parentElement.querySelector("small").innerText = "Mês invalido.";
            validator = false;
        } else if (dayI.value > 31) {
            dayI.style.borderColor = "red";
            dayI.parentElement.querySelector("small").innerText = "Dia invalido.";
            validator = false;
        } else {
            i.style.borderColor = "Black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayI.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthI.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayI.value;
        const m = month - monthI.value;
        const y = year - yearI.value;

        dayO.innerText = d;
        monthO.innerText = m;
        yearO.innerText = y;
    }
}