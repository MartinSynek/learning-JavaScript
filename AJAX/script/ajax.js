var _jmeno, _heslo, _formular;

function nastavit() {
    _jmeno = document.getElementById("jmeno");
    _heslo = document.getElementById("heslo");
    _formular = document.getElementById("formular");
}

function odeslat() {
    let jmeno = _jmeno.value;
    let heslo = _heslo.value;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "php/ajax.php?jmeno=" + jmeno, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let odpoved = this.responseText;

            _jmeno.value = "";
            _heslo.value = "";

            _formular.innerHTML = odpoved;
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send("heslo=" + heslo);
}
