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
    if (count === prevCount) {
      times++;

      ul.lastElementChild.textContent = `${count} has been liked ${times} times`;
    } else {
      times = 1;

      const li = document.createElement("li");
      ul.append(li);
      li.textContent = `${count} has been liked ${times} time`;
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

      addCount.disabled = true;
      minusCount.disabled = true;
      heart.disabled = true;
    } else {
      pause = false;
      state = "off";

      addCount.disabled = false;
      minusCount.disabled = false;
      heart.disabled = false;
    }
  });

  setInterval(() => {
    if (!pause) {
      count++;
      countDisp.textContent = count;
    } else countDisp.textContent = count;
  }, 1000);
});
