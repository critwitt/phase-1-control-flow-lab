function scuberGreetingForFeet(distance){
  if (distance < 400) {
    const msg = "This one is on me!";
    return msg
  }
  else if (distance < 2000) {
    const msg = "That will be twenty bucks.";
    return msg
  }
  else if (distance < 2500) {
    const msg = "I will gladly take your thirty bucks.";
    return msg
  }
  else {
    const msg = "No can do.";
    return msg
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    const msg = "Ok, sounds good.";
    return msg
  }
  else {
    const msg = "No go.";
    return msg
  }
}

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    const msg = "Thank you so much.";
    return msg
  }
  else if (tip === "not as generous") {
    const msg = "Thank you.";
    return msg
  }
  else {
    const msg = "Bye.";
    return msg
  }
}