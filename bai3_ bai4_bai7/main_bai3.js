function tinhTong() {
    var num = document.getElementById("txtNumber").value;

    tong1 = 0;
    tongFinal = 0;
    for (var i = 2; i <= num; i++) {
        tong1 += i
    }
    tongFinal = tong1 + 2 * num;
    document.getElementById("message").style.display = "block";
    document.getElementById("result").innerHTML = tongFinal;
}


function uocSo() {
    var num = document.getElementById("txtNumber").value;

    var count = [];
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            count.push(i);
        }
    }
    document.getElementById("message1").style.display = "block";
    document.getElementById("result1").innerHTML = count;
}


// Khi click code vẫn chạy đúng kết quả, nhưng có chữ undefined mentor check giùm e
function bangCuuChuong() {
    var num = document.getElementById("txtNumber").value;
    var count;
    for (var i = 1; i < 11; i++) {
        count += "<br>" + num + "*" + i + "=" + num * i + "<br>";
    }
    document.getElementById("message2").style.display = "block";
    document.getElementById("result2").innerHTML = count;
}