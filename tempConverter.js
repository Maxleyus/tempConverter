function celciusToFahrenheit() {
    let c = document.getElementById("tempInput").value;
    const result = Math.round(c * 9 / 5) + 32;
    const tempResult = document.getElementById("tempResult");
    tempResult.textContent = result;
}

function fahrenheitToCelcius() {
    let f = document.getElementById("tempInput").value;
    const result = Math.round((f - 32) * 5 / 9);
    const tempResult = document.getElementById("tempResult");
    tempResult.textContent = result;
}

function convert() {
    const first = document.getElementById("first");
    if (first.textContent === "Celcius") {
        celciusToFahrenheit();
    } else {
        fahrenheitToCelcius();
    }
}

function tempSwap() {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    const button = document.getElementById("convert");
    if (first.textContent === "Celcius") {
        first.textContent = "Fahrenheit";
        second.textContent = "Ceclius";
    } else {
        first.textContent = "Celcius";
        second.textContent = "Fahrenheit";
    }
}
