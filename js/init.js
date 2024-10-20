const timer1 = new CountdownTimer({
  selector: "#clock1",
  targetDate: new Date("February, 10 2017 14:36:52"),
});

const timer2 = new CountdownTimer({
  selector: "#clock2",
  targetDate: new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000),
  backgroundColor: "rgba(124, 63, 109, 0.15)",
  foregroundColor: "rgba(124, 63, 109,0.50)",
});

const startDate = new Date(2023, 0, 1);
const currentDate = new Date().getTime();
const timer3 = new CountdownTimer({
  selector: "#clock3",
  targetDate: new Date(
    startDate.getTime() + Math.random() * (currentDate - startDate.getTime())
  ),
  backgroundColor: "#7c3f68",
  foregroundColor: null,
});

timer1.startTimer();
timer2.startTimer();
timer3.startTimer();
