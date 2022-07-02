let mouse = document.getElementsByClassName("mouse");
let nest = document.getElementsByClassName("nest");
let hit = document.getElementById("hitted");
let wrong = document.getElementById("wrong");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let str = document.getElementById("str");
let board = document.getElementById("board");
let point = document.getElementById("point");
let overall = document.getElementById("overall");
let close = document.getElementById("close");
let arr = [];
let countHit = 0;
let countWrong = 0;
let mouseArray = Object.values(mouse);

const startGame = () => {
  str.removeEventListener("click", startGame);

  const setNests = () => {
    for (i = 0; i < nest.length; i++) {
      let x = Math.floor(Math.random() * 5);
      let y = Math.floor(Math.random() * 5);
      nest[i].style.left = `${x * 20}%`;
      nest[i].style.top = `${y * 20}%`;
      arr.push(`[${x}, ${y}]`);
      if (arr.length === 10) {
        for (i = 0; i < arr.length; i++) {
          for (j = 0; j < arr.length; j++) {
            if (i != j && arr[i] === arr[j]) {
              console.log(arr);
              console.log(arr.length);
              console.log("tru value");
              arr = [];
              setNests();
            }
          }
        }
      }
    }
  };

  setNests();

  const showMouse = () => {
    for (i = 0; i < mouse.length; i++) {
      mouse[i].style.display = "none";
    }
    let hount = Math.floor(Math.random() * mouse.length);
    mouseArray[hount].style.display = "block";
    let resetDis = (e) => {
      e.target.style.display = "none";
    };
    mouseArray[hount].addEventListener("click", resetDis);
  };

  const setPoint = (e) => {
    if (e.target.className == "mouse") {
      // e.target.display = "none";
      countHit = countHit + 1;
      hit.innerHTML = countHit;
    } else {
      countWrong = countWrong + 1;
      wrong.innerHTML = countWrong;
    }
  };

  const closePoint = () => {
    point.style.display = "none";
  };

  let second = 0;
  let minute = 1;

  const timer = () => {
    second--;
    if (second < 0) {
      second = 59;
      minute--;
      if (minute < 0) {
        minute = 1;
        second = 0;
        clearInterval(setTimer);
        clearInterval(setMouse);
        board.removeEventListener("click", setPoint);
        point.style.display = "block";
        overall.innerHTML = `your point is : ${countHit - countWrong}`;
        close.addEventListener("click", closePoint);
        arr = [];
        str.addEventListener("click", startGame);
        countHit = 0;
        countWrong = 0;
        hit.innerHTML = 0;
        wrong.innerHTML = 0;
      }
    }
    sec.innerHTML = String(second).padStart(2, "0");
    min.innerHTML = String(minute).padStart(2, "0");
  };

  let setMouse = setInterval(showMouse, 1000);
  let setTimer = setInterval(timer, 1000);
  board.addEventListener("click", setPoint);
};

str.addEventListener("click", startGame);

