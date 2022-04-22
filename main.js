//Bài 1: Tìm ngày tiếp theo
document.getElementById("result_1_1").onclick = function () {
    /**
     *  Đầu vào
     */
    var ngay = document.getElementById("number_1").value * 1;
    var thang = document.getElementById("number_2").value * 1;
    var nam = document.getElementById("number_3").value * 1;
    var thang2 = 28;
    var kiemtra = "";
    /**
     *  Xử lý
     */
    if (ngay < 1 || thang < 1 || nam < 1) {
        kiemtra = "Nhập sai";
    }
    if (nam % 4 == 0) {
        thang2 = 29;
    } else {
        thang2 = 28;
    }
    switch (thang) {
        case 1:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 2:
            if (ngay == thang2) {
                ngay = 1;
                thang++;
            } else if (ngay < thang2) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 3:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 4:
            if (ngay == 30) {
                ngay = 1;
                thang++;
            } else if (ngay < 30) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 5:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 6:
            if (ngay == 30) {
                ngay = 1;
                thang++;
            } else if (ngay < 30) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 7:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 8:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 9:
            if (ngay == 30) {
                ngay = 1;
                thang++;
            } else if (ngay < 30) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 10:
            if (ngay == 31) {
                ngay = 1;
                thang++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 11:
            if (ngay == 30) {
                ngay = 1;
                thang++;
            } else if (ngay < 30) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 12:
            if (ngay == 31) {
                ngay = 1;
                thang = 1;
                nam++;
            } else if (ngay < 31) {
                ngay++;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        default:
            kiemtra = "Nhập sai";
            break;
    }
    /**
     * Đầu ra
     */
    document.getElementById("bt_1").innerHTML = "";
    var tagP = document.createElement("p");
    if (kiemtra == "Nhập sai") {
        tagP.innerHTML = "Nhập sai, xin hãy nhập lại";
    } else {
        tagP.innerHTML = "Ngày kế tiếp là " + ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("bt_1").appendChild(tagP);
}

//Bài 1: Tìm ngày trước đó
document.getElementById("result_1_2").onclick = function () {
    var ngay = document.getElementById("number_1").value * 1;
    var thang = document.getElementById("number_2").value * 1;
    var nam = document.getElementById("number_3").value * 1;
    var thang2 = 28;
    var kiemtra = "";
    if (ngay < 1 || thang < 1 || nam < 1) {
        kiemtra = "Nhập sai";
    }
    if (nam % 4 == 0) {
        thang2 = 29;
    } else {
        thang2 = 28;
    }
    switch (thang) {
        case 1:
            if (ngay == 1) {
                ngay = 31;
                thang = 12;
                nam--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 2:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= thang2) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 3:
            if (ngay == 1) {
                ngay = thang2;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 4:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= 30) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 5:
            if (ngay == 1) {
                ngay = 30;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 6:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= 30) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 7:
            if (ngay == 1) {
                ngay = 30;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 8:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 9:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= 30) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 10:
            if (ngay == 1) {
                ngay = 30;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 11:
            if (ngay == 1) {
                ngay = 31;
                thang--;
            } else if (ngay <= 30) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        case 12:
            if (ngay == 1) {
                ngay = 30;
                thang--;
            } else if (ngay <= 31) {
                ngay--;
            } else {
                kiemtra = "Nhập sai";
            }
            break;
        default:
            kiemtra = "Nhập sai";
            break;
    }
    document.getElementById("bt_1").innerHTML = "";
    var tagP = document.createElement("p");
    if (kiemtra == "Nhập sai") {
        tagP.innerHTML = "Nhập sai, xin hãy nhập lại";
    } else {
        tagP.innerHTML = "Ngày trước đó là " + ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("bt_1").appendChild(tagP);
}

//Bài 2
document.getElementById("result_2").onclick = function () {
    var thang = document.getElementById("number_4").value * 1;
    var nam = document.getElementById("number_5").value * 1;
    var soNgay = 0;
    var kiemtra = "";
    if (thang < 1 || nam < 1) {
        kiemtra = "Nhập sai";
    }
    switch (thang) {
        case 1:
            soNgay = 31;
            break;
        case 2:
            if (nam % 4 == 0) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
            break;
        case 3:
            soNgay = 31;
            break;
        case 4:
            soNgay = 30;
            break;
        case 5:
            soNgay = 31;
            break;
        case 6:
            soNgay = 30;
            break;
        case 7:
            soNgay = 31;
            break;
        case 8:
            soNgay = 31;
            break;
        case 9:
            soNgay = 30;
            break;
        case 10:
            soNgay = 31;
            break;
        case 11:
            soNgay = 30;
            break;
        case 12:
            soNgay = 31;
            break;
        default: kiemtra = "Nhập sai";
            break;
    }

    document.getElementById("bt_2").innerHTML = "";
    var tagP = document.createElement("p");
    if (kiemtra == "Nhập sai") {
        tagP.innerHTML = "Nhập sai, xin hãy nhập lại";
    } else {
        tagP.innerHTML = "Tháng này có: " + soNgay + " ngày";
    }
    document.getElementById("bt_2").appendChild(tagP);
}

//Bài 3: Cách đọc số
document.getElementById("result_3").onclick = function () {
    var number = document.getElementById("number_6").value * 1;
    var tram = parseInt(number / 100);
    var chuc = parseInt(number % 100 / 10);
    var donvi = parseInt(number % 100 % 10);
    switch (tram) {
        case 1:
            tram = "Một trăm";
            break;
        case 2:
            tram = "Hai trăm";
            break;
        case 3:
            tram = "Ba trăm";
            break;
        case 4:
            tram = "Bốn trăm";
            break;
        case 5:
            tram = "Năm trăm";
            break;
        case 6:
            tram = "Sáu trăm";
            break;
        case 7:
            tram = "Bảy trăm";
            break;
        case 8:
            tram = "Tám trăm";
            break;
        case 9:
            tram = "Chín trăm";
            break;
        default:
            tram = "";
            break;
    }

    switch (chuc) {
        case 0:
            if(donvi == 0){
                chuc = "";
            }else{
                chuc = "lẻ";
            }
            break;
        case 1:
            chuc = "mười";
            break;
        case 2:
            chuc = "hai mươi";
            break;
        case 3:
            chuc = "ba mươi";
            break;
        case 4:
            chuc = "bốn mươi";
            break;
        case 5:
            chuc = "năm mươi";
            break;
        case 6:
            chuc = "sáu mươi";
            break;
        case 7:
            chuc = "bảy mươi";
            break;
        case 8:
            chuc = "tám mươi";
            break;
        case 9:
            chuc = "chín mươi";
            break;
        default:
            chuc = "";
            break;
    }

    switch (donvi) {
        case 0:
            donvi = "";
            break;
        case 1:
            if(chuc == "lẻ"){
                donvi = "một";
            }else{
                donvi = "mốt";
            }
            break;
        case 2:
            donvi = "hai";
            break;
        case 3:
            donvi = "ba";
            break;
        case 4:
            donvi = "bốn";
            break;
        case 5:
            if(chuc == "lẻ"){
                donvi = "năm";
            }else{
                donvi = "lăm";
            }
            break;
        case 6:
            donvi = "sáu";
            break;
        case 7:
            donvi = "bảy";
            break;
        case 8:
            donvi = "tám";
            break;
        case 9:
            donvi = "chín";
            break;
        default:
            donvi = "";
            break;
    }
    document.getElementById("bt_3").innerHTML = "";
    var tagP = document.createElement("p");
    if (tram != "") {
        tagP.innerHTML ="Cách đọc là: " + tram + " " + chuc + " " + donvi;
    } else {
        tagP.innerHTML = "Hãy nhập số nguyên có 3 chữ số";
    }
    document.getElementById("bt_3").appendChild(tagP);
}

//Bài 4: Tọa độ nhà của sinh viên
document.getElementById("result_4").onclick = function(){
    var kdTr = document.getElementById("kd_truong").value*1;
    var vdTr = document.getElementById("vd_truong").value*1;

    var sv1 = document.getElementById("sv_1").value;
    var kd1 = document.getElementById("kd_1").value*1;
    var vd1 = document.getElementById("vd_1").value*1;

    var sv2 = document.getElementById("sv_2").value;
    var kd2 = document.getElementById("kd_2").value*1;
    var vd2 = document.getElementById("vd_2").value*1;

    var sv3 = document.getElementById("sv_3").value;
    var kd3 = document.getElementById("kd_3").value*1;
    var vd3 = document.getElementById("vd_3").value*1;

    function tinhKc(kd, vd){
        var kc = Math.sqrt ((kd - kdTr)*(kd - kdTr) + (vd - vdTr)*(vd - vdTr)); 
        return kc;
    }

    var max = tinhKc(kd1, vd1);
    var kc2 = tinhKc(kd2, vd2);
    var kc3 = tinhKc(kd3, vd3);
    var sinhvien = sv1;

    if(max < kc2){
        sinhvien = sv2;
    }
    if(max < kc3){
        sinhvien = sv3;
    }

    document.getElementById("bt_4").innerHTML = "";
    var tagP = document.createElement("p");
        tagP.innerHTML ="Sinh viên: " + sinhvien + " xa trường nhất";
    document.getElementById("bt_4").appendChild(tagP);
}