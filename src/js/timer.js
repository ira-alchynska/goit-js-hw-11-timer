const refs = {
  days: document.querySelector('span[data-value="days"]'),   
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),   
  secs: document.querySelector('span[data-value="secs"]'),   
  timerClock: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  startTime = setInterval(() => {
    const currentTime = Date.now(); // час на даний момент
    const deltaTime = this.targetDate.getTime() - currentTime;
    this.updateClock(deltaTime);
  }, 1000);

  updateClock(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  finishTime(deltaTime) {
    if (deltaTime < 0) {
      clearInterval(this.startTime);
      return refs.timerClock.textContent = "Finish";
    }
  }
};
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 17, 2021"),
});