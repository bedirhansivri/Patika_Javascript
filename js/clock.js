let namePrompt = prompt("Adınız Nedir");
let myName = (document.getElementById("myName").innerHTML = namePrompt);



function getFormat() {
  var result = new Array(4);
  var now = new Date();
  var days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  result[0] = now.getHours();
  result[1] = now.getMinutes();
  result[2] = now.getSeconds();
  result[3] = days[now.getDay()];

  for (i = 0; i < 3; i++)
    result[i] = result[i] < 10 ? "0" + result[i] : result[i];

  return result;
}

function showTime() {
  clock = getFormat();
  var clockFormat = clock[0] + ":" + clock[1] + ":" + clock[2] + " " + clock[3];
  document.getElementById("myClock").innerHTML = clockFormat;
}

setInterval(showTime, 1000);
