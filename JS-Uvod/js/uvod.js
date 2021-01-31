window.alert("Hello World!");
console.log("Hello World!");

var x = 1;

function uzivatelKliknul() {
    x += 1;
    console.log("x je " + x)
    document.getElementById("reakce").innerHTML = x;
}

function pohybTlacitka() {
    document.getElementById("pohyb").style.position = "absolute";
    document.getElementById("pohyb").style.right = (Math.random() * 1000) + "px";
    document.getElementById("pohyb").style.top = (Math.random() * 1000) + "px";
}

function demo() {
    console.log("Co a jak v JavaScriptu.");

    // JavaScript vychazi syntakticky z C
    /*
    spoustu
    veci
    tedy
    uz
    zname
    */

    // promenna a deklarace
    // 1. bez deklarace
    x = 6;
    // 2. deklarace pomoci var
    var x;
    // promenna je platna bud ve funkci, nebo ve skriptu
    // funguje tzv. hoisting

    // 3. deklarace pomoci let
    // promenna je platna v bloku, kde byla deklarovana
    {
        //y = 10; // nelze
        let y = 6;
        console.log(y) // funguje
    }
    // console.log(y) // nefunguje
    // zadny hoisting

    // 4. deklarace pomoci const
    const z = 10;
    // stejny rozsah platnosti jako deklarace pomoci let
    // zadny hoisting
    // hodnotu promenne nelze zmenit
    console.log(z);
    // z = 0; // nelze

    // DATOVE TYPY

    let text = "toto je text";
    console.log(typeof text);
    let cislo = 686463153;
    console.log(typeof cislo);
    cislo = 3.14;
    log(typeof cislo);
    let pravdivost = true;
    log(typeof pravdivost)
    let coasi;
    log(coasi);
    log(typeof coasi);
}