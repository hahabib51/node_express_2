function timeWord(time) {
    // Return midnight
    if (time == "00:00") {
      return "midnight";
    }
  
    // Return noon
    if (time == "12:00") {
      return "noon";
    }
  
    const ones = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "sex",
      "seven",
      "eight",
      "nine",
    ];
    const tens = ["ten", "twenty", "thirty", "forty", "fifty"];
    const teens = [
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const amPm = ["am", "pm"];
    const hrs = Number(time.split(":")[0]);
    const min = Number(time.split(":")[1]);
    const timeArr = [];
  
    // Add hours to array
    if (hrs === 0) {
      timeArr.push(teens[1]);
    } else if (hrs >= 1 && hrs <= 9) {
      timeArr.push(ones[hrs - 1]);
    } else if (hrs === 10) {
      timeArr.push(tens[0]);
    } else if (hrs >= 11 && hrs <= 12) {
      timeArr.push(teens[hrs - 11]);
    } else if (hrs >= 13 && hrs <= 21) {
      timeArr.push(ones[hrs - 13]);
    } else if (hrs === 22) {
      timeArr.push(tens[0]);
    } else if (hrs === 23) {
      timeArr.push(teens[hrs - 23]);
    }
  
    // Add min to array
    if (min === 0) {
      timeArr.push(`o'clock`);
    } else if (min >= 1 && min <= 9) {
      timeArr.push("oh");
      timeArr.push(ones[min - 1]);
    } else if (min === 10) {
      timeArr.push(tens[0]);
    } else if (min >= 11 && min <= 19) {
      timeArr.push(teens[min - 11]);
    } else if (min >= 20 && min <= 29) {
      if (min === 20) {
        timeArr.push(tens[1]);
      } else {
        timeArr.push(tens[1]);
        timeArr.push(ones[min - 21]);
      }
    } else if (min >= 30 && min <= 39) {
      if (min === 30) {
        timeArr.push(tens[2]);
      } else {
        timeArr.push(tens[2]);
        timeArr.push(ones[min - 31]);
      }
    } else if (min >= 40 && min <= 49) {
      if (min === 40) {
        timeArr.push(tens[3]);
      } else {
        timeArr.push(tens[3]);
        timeArr.push(ones[min - 41]);
      }
    } else if (min >= 40 && min <= 49) {
      if (min === 40) {
        timeArr.push(tens[3]);
      } else {
        timeArr.push(tens[3]);
        timeArr.push(ones[min - 41]);
      }
    } else if (min >= 50 && min <= 59) {
      if (min === 50) {
        timeArr.push(tens[4]);
      } else {
        timeArr.push(tens[4]);
        timeArr.push(ones[min - 51]);
      }
    }
  
    // Add am or pm to array
    if (hrs >= 0 && hrs <= 11) {
      timeArr.push(amPm[0]);
    } else if (hrs >= 12 && hrs <= 23) {
      timeArr.push(amPm[1]);
    }
  
    // Return joined array to string
    return timeArr.join(" ");
  }
  
  module.exports = timeWord;
  