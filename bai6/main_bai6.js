function timSoLonNhat() {
    var num = document.getElementById("txtNumber").value;

    var m = 0;
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if ((sum + m) <= num) {
            sum += ++m;

        }
    }

    document.getElementById("message").style.display = "block";
    document.getElementById("result").innerHTML = m;

}
