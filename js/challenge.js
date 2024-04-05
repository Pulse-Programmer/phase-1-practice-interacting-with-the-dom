let pause = false;
let count = 0;
let state = "off";
let prevNumber = null;

document.addEventListener("DOMContentLoaded", () => {
  const countDisp = document.querySelector("#counter");
  const pauseBtn = document.querySelector("#pause");
  const addCount = document.querySelector("#plus");
  const minusCount = document.querySelector("#minus");
  const heart = document.querySelector("#heart");

  // heart.addEventListener("click", () => {
  //   let countHeart = count;
  //   //let times = 0;

  //   const tracker = (function () {
  //     let times = 0;

  //     return () => {
  //       times++;
  //       do {
  //         console.log(`${count} has been liked ${times} times`);
  //       } //while (countHeart === prevNumber);
  //     };
  //   })();

  //   tracker();
  //   prevNumber = countHeart;
  // });

  addCount.addEventListener("click", () => {
    count++;
    countDisp.textContent = count;
  });

  minusCount.addEventListener("click", () => {
    count--;
    countDisp.textContent = count;
  });

  pauseBtn.addEventListener("click", () => {
    if (state === "off") {
      pause = true;
      state = "on";
    } else {
      pause = false;
      state = "off";
    }
  });

  setInterval(() => {
    if (!pause) {
      count++;
      countDisp.textContent = count;
    } else countDisp.textContent = count;
  }, 1000);
});
