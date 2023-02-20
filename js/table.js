const samsung = ["Released 2021, January 29", "Android 11, One UI 3.1", "227g, 8.9mm thickness", "6.8", "128GB/256GB/512GB storage", "GSM / LTE / 5G", "108 MP", "40 MP", "5000 mAh", "Fast Charging 25W"];
const iphone = ["Released 2020, November 13", "IOS 14.1", "228g,7.4mm thickness", "6.7", "128GB/256GB/512GB storage", "GSM / LTE / 5G", "12 MP", "12 MP", "3687 mAh", "Fast Charging 20W"];

function showMessage() {
    document.getElementById("table").style.display = "block";
    var phone = document.getElementById("phone").value;
    display_message.innerHTML = phone;

    if (phone == "Galaxy S21 Ultra") {
        document.getElementById("release").innerHTML = samsung[0];
        document.getElementById("os").innerHTML = samsung[1];
        document.getElementById("size").innerHTML = samsung[2];
        document.getElementById("display").innerHTML = samsung[3];
        document.getElementById("storage").innerHTML = samsung[4];
        document.getElementById("network").innerHTML = samsung[5];
        document.getElementById("camera").innerHTML = samsung[6];
        document.getElementById("selfie").innerHTML = samsung[7];
        document.getElementById("type").innerHTML = samsung[8];
        document.getElementById("charge").innerHTML = samsung[9];
    } else if (phone == "Iphone 12 pro max") {
        document.getElementById("release").innerHTML = iphone[0];
        document.getElementById("os").innerHTML = iphone[1];
        document.getElementById("size").innerHTML = iphone[2];
        document.getElementById("display").innerHTML = iphone[3];
        document.getElementById("storage").innerHTML = iphone[4];
        document.getElementById("network").innerHTML = iphone[5];
        document.getElementById("camera").innerHTML = iphone[6];
        document.getElementById("selfie").innerHTML = iphone[7];
        document.getElementById("type").innerHTML = iphone[8];
        document.getElementById("charge").innerHTML = iphone[9];
    }

    var phone2 = document.getElementById("phone2").value;
    display_text.innerHTML = phone2;

    if (phone2 == "Galaxy S21 Ultra") {
        document.getElementById("release1").innerHTML = samsung[0];
        document.getElementById("os1").innerHTML = samsung[1];
        document.getElementById("size1").innerHTML = samsung[2];
        document.getElementById("display1").innerHTML = samsung[3];
        document.getElementById("storage1").innerHTML = samsung[4];
        document.getElementById("network1").innerHTML = samsung[5];
        document.getElementById("camera1").innerHTML = samsung[6];
        document.getElementById("selfie1").innerHTML = samsung[7];
        document.getElementById("type1").innerHTML = samsung[8];
        document.getElementById("charge1").innerHTML = samsung[9];
    } else if (phone2 == "Iphone 12 pro max") {
        document.getElementById("release1").innerHTML = iphone[0];
        document.getElementById("os1").innerHTML = iphone[1];
        document.getElementById("size1").innerHTML = iphone[2];
        document.getElementById("display1").innerHTML = iphone[3];
        document.getElementById("storage1").innerHTML = iphone[4];
        document.getElementById("network1").innerHTML = iphone[5];
        document.getElementById("camera1").innerHTML = iphone[6];
        document.getElementById("selfie1").innerHTML = iphone[7];
        document.getElementById("type1").innerHTML = iphone[8];
        document.getElementById("charge1").innerHTML = iphone[9];
    }

}