$(document).ready(function(){
  // Chat Bubble Variables
  let date = Date().toLocaleString();

  let $chatTime = $(".time-stamp")
  $chatTime.text(date);



// Random Response Function
function randomResponse() {
  const responseArr = [
    "It is certain",
    "Reply hazy, try again",
    "Don’t count on it",
    "It is decidedly so",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "As I see it, yes",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
    "Most likely",
    "Cannot predict now",
    "Outlook not so good",
    "You may rely on it",
    "Outlook good",
    "Concentrate and ask again",
    "Yes",
    "Very doubtful",
    "Signs point to yes"
  ]

  const min = 0;
  const max = Math.floor(responseArr.length);
  return Math.floor(Math.random() * (max - min) + min);
}



});
