class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTimeRemaining(endtime) {
    console.log(endtime);
  }

  updateTimer({ days, hours, mins, secs }) {}

  startTimer() {
    const timer = this.getTimeRemaining(this.targetDate);
  }
}

const timer1 = new CountdownTimer({
  selector: "#clock1",
  targetDate: new Date("July, 17 2023 16:34:26"),
});
timer1.startTimer();
