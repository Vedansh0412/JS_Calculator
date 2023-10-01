let calculator_input_number_V = document.getElementById('calculator-input-number');
let calculator_input_number_previews_V = document.getElementById('calculator-input-number-previews');

let calculator_input_ac_V = document.getElementById('calculator-input-ac');

let DisplayValue;

function display(DisplayValue){
    calculator_input_number_V.value+=DisplayValue;

}

calculator_input_ac_V.addEventListener('click', () => {
    calculator_input_number_V.value = "";
    calculator_input_number_previews_V.value = "";
})

function displaySolve(){
    let eq = calculator_input_number_V.value;

    calculator_input_number_previews_V.value = eq;

    let y = eval(eq);

    calculator_input_number_V.value = y;
}

