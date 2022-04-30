function submit() {
    var S = 0;
    var n = 0;
    while (S < 10000) {
        n++;

        S += n;
    }
    document.getElementById("output").innerHTML = n;
    document.getElementById("output").classList.add("alert-primary");
}
function tinhTong() {
    var n = document.getElementById("n").value * 1;
    var x = document.getElementById("x").value * 1;

    var i = 1;
    var T = 1;
    var S = 0;

    while (i <= n) {
        T = T * x;
        S = S + T;
        i++;
    }
    document.getElementById("tinhtong").innerHTML = S;
    document.getElementById("tinhtong").classList.add("alert-primary");
}
function Tinh() {
    tinhTong();
}
function GiaiThua() {
    var number = document.getElementById("number3").value * 1;
    var giaithua = 1;
    for (var i = 1; i <= number; i++) {
        giaithua *= i;
    }
    document.getElementById("footercard").innerHTML = "Giai thừa của: " + number + " là " + giaithua;
    document.getElementById("footercard").classList.add("alert-primary");
}

function TaoThe() {
    var divChanLe = document.getElementById("divContent");
    // reset nội dung
    divChanLe.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            divChanLe.innerHTML += "<div style='background-color: blue;'>" + i + "</div>";
        } else {
            divChanLe.innerHTML += "<div style='background-color: red;'>" + i + "</div>";
        }
    }
}
