$(document).ready(function(){
  // Chat Bubble Variables
  let date = Date().toLocaleString();

  let $aiTimeStamp = $(".ai-time-stamp");
  $aiTimeStamp.text(date);

  let $userTimeStamp = $(".user-time-stamp");
  $userTimeStamp.text(date);


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
  return responseArr[Math.floor(Math.random() * (max - min) + min)];
}

  // Chat bubble generating functions
  let $chatPage = $(".chat-section-wrapper")

  let magicEightBallPost = () => {
    return (
      `<div class="chat-bubble-wrapper">
      <span class="chat-bubble-name">Mystic Eight Ball</span>
      <div class="chat-bubble-ai">
        <p>${randomResponse()}</p>
      </div>
      <span class="ai-time-stamp">${date}</span>
      </div>`
    )
  }

    let userPost = (input) => {
      return (
        `<div class="chat-bubble-wrapper">
        <span class="user-chat-bubble-name">Chris</span>
        <div class="chat-bubble-user">
          <p>${input}</p>
        </div>
        <span class="user-time-stamp"></span>
        </div>`
      )
    }

    // $chatPage.append(magicEightBallPost);


    $("#chat-input").keypress(function (e) {
      if (e.which == 13) {
        console.log("pressed enter")
       // $('form#login').submit();
       $chatPage.append(magicEightBallPost);

       $('.chat-section-wrapper').animate({scrollTop: $('.chat-section-wrapper').prop("scrollHeight")}, 500);
        return false;
      }
    });

});
