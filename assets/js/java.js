$(document).ready(function() {
    $('#numeroForm').submit(function(event) {
        event.preventDefault(); // Evitar la recarga de la página
        var numero = $('#numeroInput').val(); // Obtener el valor del input
        numero = Number(numero); // Convertir a número

        if (!isNaN(numero) && numero >= 1 && numero <= 20) {
            var factorial = calcularFactorial(numero);
            alert("El factorial de " + numero + " es: " + factorial);
        } else {
            alert("Número fuera de rango o inválido. Por favor, ingrese un número entre 1 y 20.");
        }
    });

    function calcularFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calcularFactorial(n - 1);
        }
    }
});
