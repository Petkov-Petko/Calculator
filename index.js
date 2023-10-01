// Променлива, в която ще се съхранява текущият въведен израз

let currentInput = "";

// Функция за добавяне на цифри и оператори

function add(value){
    currentInput += value;
    refresh();
}

// Функция за изчистване на текущия въведен израз

function clear(){
    currentInput = '';
    refresh();
}

// Функция за изтриване на последния символ в текущия въведен израз

function del(){
    currentInput = currentInput.slice(0, -1)
    refresh();
}

// Функция за изчисляване на текущия въведен израз и показване на резултата

function calculate(){
    try{
         const answer = eval(currentInput);
         currentInput = answer.toString();
         refresh();
    }
    catch (error){
        currentInput = "Error";
        refresh();
    }
}

// Функция за обновяване на дисплея с текущия въведен израз

function refresh(){
    document.querySelector(".calculator h1").textContent = currentInput;
}

// Добавяме слушатели на бутоните

document.querySelectorAll(".btn").forEach((button => {
    button.addEventListener("click", () => {
        buttonValue = button.textContent;
        if (buttonValue === "="){
            calculate();
        }
        else if (buttonValue === "AC"){
            clear();
        }
        else if (buttonValue === "DE"){
            del();
        }
        else{
            add(buttonValue);
        }
    })
}))

// Изчистваме въведеният текст при зареждане на страницата

window.addEventListener("load", () => {
    clear();
})