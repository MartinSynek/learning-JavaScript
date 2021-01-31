function vypocet() {
    let cislo1;
    let cislo2;
    let operator;
    let vysledek;

    cislo1 = document.getElementById("cislo1").value;
    cislo2 = document.getElementById("cislo2").value;
    operator = document.getElementById("operator").value;

    console.log(cislo1);
    console.log(cislo2);
    console.log(operator);

    if (operator == 1) {
        vysledek = parseInt(cislo1) + parseInt(cislo2);
    }
    if (operator == 2) {
        vysledek = parseInt(cislo1) - parseInt(cislo2);
    }
    if (operator == 3) {
        vysledek = parseInt(cislo1) * parseInt(cislo2);
    }
    if (operator == 4) {
        vysledek = parseInt(cislo1) / parseInt(cislo2);
    }

    document.getElementById("vysledek").value = vysledek;
}

function generator() {
    let text;
    let pocet;
    let vysledek2 = "";

    text = document.getElementById("text").value;
    pocet = document.getElementById("pocet").value;

    console.log(text);
    console.log(pocet);

    for (let cislo = 0; cislo < parseInt(pocet); cislo++) {
        vysledek2 += text;
    }

    document.getElementById("vysledek2").value = vysledek2;
}