const insideWrapper = document.getElementById("in-wrap");
const edge = document.getElementById("edge");
const hrPointer = document.getElementById("hr-pointer");
const mnPointer = document.getElementById("mn-pointer");
const secPointer = document.getElementById("sec-pointer");
const dayWeekView = document.getElementById("day-w");
const dayView = document.getElementById("day-m");
const monthView = document.getElementById("month");
const yearView = document.getElementById("year");
const color = {
  weekDay: "#0b5e0b",
  sunDay: "#941515",
};
let date, weekDay, day, month, year, hr, mn, sec, t;
for (let i = 0; i < 39; i++) {
  const eEdge = document.createElement("div");
  eEdge.className = "e";
  [0, 1].forEach((v) => {
    const eP = document.createElement("span");
    eP.className = "e-p";
    eEdge.appendChild(eP);
  });
  edge.appendChild(eEdge);
  eEdge.style.transform = `rotate(${(360 / 39) * i}deg)`;
}
const hourLabels = [
  [12, 6],
  [1, 7],
  [2, 8],
  [3, 9],
  [4, 10],
  [5, 11],
];
hourLabels.forEach((v, i) => {
  const hrDiv = document.createElement("div");
  hrDiv.className = "hr";
  v.forEach((el) => {
    const hrSpan = document.createElement("span");
    hrSpan.innerText = el;
    hrDiv.appendChild(hrSpan);
  });
  insideWrapper.appendChild(hrDiv);
  hrDiv.style.transform = `rotate(${(180 / 6) * i}deg)`;
});
[0, 1, 2, 3, 4, 5].forEach((v) => {
  const hrHalf = document.createElement("div");
  hrHalf.className = "half";
  [0, 1].forEach((el) => {
    const halfSpan = document.createElement("span");
    hrHalf.appendChild(halfSpan);
  });
  insideWrapper.appendChild(hrHalf);
  hrHalf.style.transform = `rotate(${(180 / 6) * v + 180 / 6 / 2}deg)`;
});
init();
start();

//functions
function init() {
  initDateTime();
  hrPointer.style.transform = `rotate(${
    (hr * 360) / 12 + ((mn * 360) / 3600) * 6
  }deg)`;
  mnPointer.style.transform = `rotate(${(mn * 360) / 60}deg)`;
  secPointer.style.transform = `rotate(${(sec * 360) / 60}deg)`;
  dayWeekView.innerHTML = weekDay;
  dayView.innerHTML = day < 9 ? "0" + day : day;
  monthView.innerHTML = month < 9 ? "0" + month : month;
  yearView.innerHTML = year;
  dayWeekView.style.color = weekDay == "SU" ? color.sunDay : color.weekDay;
}

function start() {
  t = setInterval(() => {
    init();
  }, 1000);
}
function IncrementDeg(el, deg) {
  let oldDeg = Number(
    el.style.transform.toString().substring("rotate(".length).replace(")", "")
  );
  oldDeg += deg;
  el.style.transform = `rotate(${oldDeg}deg)`;
}

function initDateTime() {
  date = new Date();
  weekDay = ["mo", "tu", "we", "th", "fr", "sa", "su"][
    date.getDay() - 1
  ].toUpperCase();
  day = date.getDate();
  month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ][date.getMonth()].toUpperCase();
  year = date.getFullYear();
  hr = date.getHours();
  if (hr > 12) hr -= 12;
  mn = date.getMinutes();
  sec = date.getSeconds();
}
