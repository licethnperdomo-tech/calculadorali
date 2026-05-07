const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const operadores = ["+", "-", "*", "/"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }  
        }
        else if (button.id === "ac") {
            display.value = "";
        }
        else if (button.id === "dc") {
            display.value = display.value.slice(0, -1);
        }
        else {
            const ultimoCaracter = display.value.slice(-1);
            const esOperador = operadores.includes(button.id);
            const ultimoEsOperador = operadores.includes(ultimoCaracter);

            if (esOperador && ultimoEsOperador) {
                console.log("✖️ No puedes poner dos operadores seguidos");
                return;
            }

            display.value += button.id;
        }
    });
});