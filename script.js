function getCounterValue() {
  const counterEl = document.getElementById("counter");
  const n = parseInt(counterEl.textContent, 10);
  return Number.isFinite(n) ? n : 0;
}

function setCounterValue(n) {
  document.getElementById("counter").textContent = String(n);
}

function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}

function runForLoop() {
  const n = getCounterValue();
  const parts = [];
  for (let i = 0; i <= n; i++) {
    parts.push(i);
  }
  document.getElementById("forLoopResult").textContent = parts.join(" ");
}

function showOddNumbers() {
  const n = getCounterValue();
  const parts = [];
  for (let i = 1; i <= n; i += 2) {
    parts.push(i);
  }
  document.getElementById("oddNumberResult").textContent = parts.join(" ");
}

function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  for (let i = Math.floor(n / 5) * 5; i >= 5; i -= 5) {
    arr.push(i);
  }

  console.log(arr);
}

function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

function loadCar(whichCar) {
  const obj = window["carObject" + whichCar];

  if (!obj) {
    console.warn("Car object not found:", whichCar);
    return;
  }

  document.getElementById("carType").value = obj.cType ?? "";
  document.getElementById("carMPG").value = obj.cMPG ?? "";
  document.getElementById("carColor").value = obj.cColor ?? "";
}

function changeColor(whichColor) {
  const p = document.getElementById("styleParagraph");

  const colors = {
    1: "red",
    2: "green",
    3: "blue"
  };

  p.style.color = colors[whichColor] ?? "";
}
