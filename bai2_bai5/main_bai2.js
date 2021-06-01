var list = [];

function soNguyenToTrongMang() {
    var danhSach = document.getElementById("txtThemSo").value;
    var danhSachSoNguyen = danhSach.split(",");

    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        list.push(+danhSachSoNguyen[i]);
    }

    document.getElementById("mess").style.display = "block";
    document.getElementById("mang").innerHTML = list;
}

function timSoNguyenTo() {
    list = list.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0)
                return false;
        }
        return true;
    });

    document.getElementById("message").style.display = "block";
    document.getElementById("result").innerHTML = list;

}

function daoNguocMang() {
    var listDaoNguoc = [];
    for (var i = list.length - 1; i >= 0; i--) {
        listDaoNguoc.push(list[i]);
    }

    list = listDaoNguoc;
    document.getElementById("message1").style.display = "block";
    document.getElementById("result1").innerHTML = list;
}
