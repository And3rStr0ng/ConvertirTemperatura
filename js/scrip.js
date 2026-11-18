document.addEventListener("DOMContentLoaded", () => {
    const inputValor = document.getElementById('input-valor');
    const selectOrigen = document.getElementById('select-origen');
    const selectDestino = document.getElementById('select-destino');
    const btnConvertir = document.getElementById('btn-convertir');
    const divResultado = document.getElementById('resultado');

    function verificarCampos() {
        const valor = inputValor.value.trim();
        const origen = selectOrigen.value;
        const destino = selectDestino.value;

        // Validamos que el input no esté vacío y que los selects tengan valor seleccionado
        if (valor !== "" && origen !== "" && destino !== "") {
            btnConvertir.removeAttribute('disabled'); // Habilita el botón
        } else {
            btnConvertir.setAttribute('disabled', 'true'); // Mantiene deshabilitado
        }
    }

    // Escuchamos eventos en los tres elementos
    inputValor.addEventListener('input', verificarCampos);
    selectOrigen.addEventListener('change', verificarCampos);
    selectDestino.addEventListener('change', verificarCampos);

    // Lógica al hacer clic en convertir
    btnConvertir.addEventListener('click', () => {
        let valor = parseFloat(inputValor.value);
        let origen = selectOrigen.value;
        let destino = selectDestino.value;
        let resultadoFinal = 0;

        // Fórmulas de conversión básicas
        if (origen === "Celsius" && destino === "Fahrenheit") {
            resultadoFinal = (valor * 9/5) + 32;
        } else if (origen === "Fahrenheit" && destino === "Celsius") {
            resultadoFinal = (valor - 32) * 5/9;
        } else if (origen === "Kelvin" && destino === "Celsius") {
            resultadoFinal = valor - 273.15;
        } else if (origen === "Celsius" && destino === "Kelvin") {
            resultadoFinal = valor + 273.15;
        } else {
            resultadoFinal = valor; // Si son iguales
        }

        divResultado.style.color = "green";
        divResultado.textContent = `${valor} ${origen} es ${resultadoFinal.toFixed(2)} ${destino}`;
    });
});