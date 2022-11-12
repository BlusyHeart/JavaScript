function Solve(input) {
  let meetingLog = {};
  for (const data of input) {
    [weekDay, userName] = data.split(" ");
    if (meetingLog[weekDay] != undefined) {
      console.log(`Conflict on ${weekDay}!`);
      continue;
    }
    meetingLog[weekDay] = userName;
    console.log(`Scheduled for ${weekDay}`);
  }

  for (const key in meetingLog) {
    console.log(`${key} -> ${meetingLog[key]}`);
  }
}
Solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
