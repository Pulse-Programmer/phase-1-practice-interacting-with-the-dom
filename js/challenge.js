let pause = false;
let count = 0;
let state = "off";
let prevCount = null;
let times = 0;

document.addEventListener("DOMContentLoaded", () => {
  const countDisp = document.querySelector("#counter");
  const pauseBtn = document.querySelector("#pause");
  const addCount = document.querySelector("#plus");
  const minusCount = document.querySelector("#minus");
  const heart = document.querySelector("#heart");
  const ul = document.querySelector("ul.likes");
  const form = document.querySelector("form#comment-form");
  const body = document.querySelector("body");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p = document.createElement("p");
    p.textContent = e.target.commentInput.value;
    body.append(p);
    form.reset();
  });

  heart.addEventListener("click", () => {
    const li = document.createElement("li");
    //ul.append(li);
    //let times = 0;
    if (count === prevCount) {
      times++;
      li.textContent = `${count} has been liked ${times} times`;
      //ul.append(li);
    } else {
      times = 0;
      times++;
      li.textContent = `${count} has been liked ${times} time`;
      ul.append(li);
    }

    prevCount = count;
  });

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
