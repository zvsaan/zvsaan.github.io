document.getElementById("tempConverterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = `${temperature} Celsius is ${(temperature * 9/5) + 32} Fahrenheit.`;
    } else {
        result = `${temperature} Fahrenheit is ${(temperature - 32) * 5/9} Celsius.`;
    }

    document.getElementById("result").innerText = result;
});