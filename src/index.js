import "./main.css";
import "./day.scss";
import "./night.scss";
import "./sun.js"
document.getElementById("night").hidden = true;
document.getElementById("day").hidden = true;
var myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    var clock = document.getElementById("clock");
    var now = new Date();
    var className = "sky-gradient-" + now.getHours();
    clock.classList.add(className);
    navigator.geolocation.getCurrentPosition(function (position) {
        var sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
        var sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);
        if (sunrise < now && now < sunset) {
            document.getElementById("night").hidden = true;
            document.getElementById("day").hidden = false;
        } else {
            document.getElementById("night").hidden = false;
            document.getElementById("day").hidden = true;
        }
    });
    document.getElementById("digits").innerHTML = now.toLocaleTimeString();
}


