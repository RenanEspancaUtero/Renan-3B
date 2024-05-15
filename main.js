function calcularIMC(){
    var peso = document.getElementByld('peso').value;
    var altura = document.getElementByld('altura').value;
    var imc = peso / (altura*altura);
    document.getElementsByld('imc').value = imc.toFixed(2);
    }