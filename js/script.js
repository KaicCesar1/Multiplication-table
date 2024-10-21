// Seleção de elmentos
const multiplicationForm = document.querySelector("#multiplicator-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        
        const template = 
        `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        </div`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
}


// Eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})