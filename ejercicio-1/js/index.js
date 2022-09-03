const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn_generar = document.getElementById("btn_generar");
const btn_limpiar = document.getElementById("btn_limpiar");
const tbody_resultado = document.getElementById("tbody_resultado");
const n_menor_html = document.getElementById("n_menor");
const n_mayor_html = document.getElementById("n_mayor");
let html = "";
const numeros_aleratorios = [];

function aleatorio(inferior, superior) {
    const numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function generarTabla() {
    let contador = 0;
    html = "";
    numeros_aleratorios.length = 0;

    if (num1.value === "" || num2.value === "") {
        alert("Ingrese los valores");
        return;
    }

    if (isNaN(num1.value) || isNaN(num2.value)) {
        alert("Ingrese solo números");
        return;
    }

    if (
        !Number.isInteger(parseFloat(num1.value)) ||
        !Number.isInteger(parseFloat(num2.value))
    ) {
        alert("Ingrese solo números enteros");
        return;
    }

    if (parseInt(num1.value) < 0 || parseInt(num2.value) < 0) {
        alert("Ingrese solo números positivos");
        return;
    }

    for (let i = 0; i < num1.value * num2.value; i++) {
        numeros_aleratorios.push(aleatorio(1, 1000));
    }

    let n_mayor = 0;
    let n_menor = numeros_aleratorios[0];

    for (let i = 0; i < numeros_aleratorios.length; i++) {
        if (numeros_aleratorios[i] > n_mayor) {
            n_mayor = numeros_aleratorios[i];
        }

        if (numeros_aleratorios[i] < n_menor) {
            n_menor = numeros_aleratorios[i];
        }
    }

    for (let j = 1; j <= num1.value; j++) {
        html += `<tr>`;
        for (let k = 1; k <= num2.value; k++) {
            html += `<td>${numeros_aleratorios[(contador += 1) - 1]}</td>`;
        }
        html += `</tr>`;
    }

    tbody_resultado.innerHTML = html;
    n_menor_html.innerHTML = `<b>Número Menor: </b>${n_menor}`;
    n_mayor_html.innerHTML = `<b>Número Mayor: </b>${n_mayor}`;
}

function limpiar() {
    tbody_resultado.innerHTML = "";
    n_menor_html.innerHTML = "";
    n_mayor_html.innerHTML = "";
    num1.value = "";
    num1.focus();
    num2.value = "";
    numeros_aleratorios.length = 0;
}

btn_generar.addEventListener("click", generarTabla);
btn_limpiar.addEventListener("click", limpiar);
