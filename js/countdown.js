class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value = "days"]`),
      hours: document.querySelector(`${this.selector} [data-value = "hours"]`),
      minutes: document.querySelector(
        `${this.selector} [data-value = "minutes"]`
      ),
      seconds: document.querySelector(
        `${this.selector} [data-value = "seconds"]`
      ),
    };
  }

  getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
      total,
      days,
      hours,
      mins,
      secs,
    };
  }

  updateTimer({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.minutes.textContent = minutes;
    this.refs.days.textContent = days;
  }

  startTimer() {
    const timer = this.getTimeRemaining(this.targetDate);
  }
}

const timer1 = new CountdownTimer({
  selector: "#clock1",
  targetDate: new Date("July, 17 2023 16:34:26"),
});
timer1.startTimer();
