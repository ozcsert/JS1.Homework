







let userName = prompt("Isminiz?");

let info = document.querySelector("#info")

info.innerHTML = ( "Merhaba, " + `${userName}` + "!" + " Hos Geldin!" );


var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Europe/Istanbul"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);




