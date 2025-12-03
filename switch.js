let day;
let date = new Date().getDay();

switch(date){
  case 0:
  day = "sunday";
  break;
  case 1:
  day = "monday";
  break;
  case 2:
  day = "Tuesday";
  break;
  case 3:
  day = "Wednesday";
  break;
  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;
  case 6:
  day = "Saturday";
  break;
}

document.getElementById("demo1").innerHTML ="Today is " + day;