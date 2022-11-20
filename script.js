$(document).ready(function(){

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

  // Get Date & Time
  let getDateAndTime = () => {
    return new Date(new Date().getTime()).toString()
  }

  // Create dynamic CSS IDs for targeting
  let eightBallIdCounter = 0;
  let $eightBallId = "";

  // Generate Post From Magic Eight Ball
  let magicEightBallPost = (response) => {
    eightBallIdCounter += 1;
    $eightBallId = `chat-bubble-ai-${eightBallIdCounter}`

    return (
      `<div class="chat-bubble-wrapper" id=${$eightBallId}>
      <span class="chat-bubble-name">Mystic Eight Ball</span>
      <div class="chat-bubble-ai">
        <p>${response}</p>
      </div>
      <span class="ai-time-stamp">${getDateAndTime()}</span>
      </div>`
    )
  }

  // Generate User Post
  let userPost = (input) => {
    return (
      `<div class="chat-bubble-wrapper">
      <span class="user-chat-bubble-name">${userName}</span>
      <div class="chat-bubble-user">
        <p>${input}</p>
      </div>
      <span class="user-time-stamp">${getDateAndTime()}</span>
      </div>`
    )
  }

  // Assign page sections to variables
  let $chatInput = $(".chat-input");
  let $chatPage = $(".chat-section-wrapper")

  // Chat bubble generating functions
  let userName = "";

  $chatInput.keypress(function (e) {
    let input = e.target.value;

     // Auto scrolls the chat & prevents page reload
  let chatScroll = () => {
    $('.chat-section-wrapper').animate({scrollTop: $('.chat-section-wrapper').prop("scrollHeight")}, 500);
    e.target.value = "";
    e.preventDefault();
  }

  // AI loading state - simulates typing
  let loadingResponse = () => {
    $(".eightBallText").html("");
    let currentResponse = randomResponse();
    let video = document.getElementById("video")
    video.play();
    setTimeout(function () {
      $(".eightBallText").append(`<span>${currentResponse}</span>`);
      chatScroll();
    }, 6000)
    $chatPage.append(magicEightBallPost(`<span class="dots"><span><strong>.</strong></span><span><strong>.</strong></span><span><strong>.</strong></span></span>`));
    setTimeout(function () {
      console.log($eightBallId);
      $(`#${$eightBallId.toString()}`).replaceWith(magicEightBallPost(currentResponse));
      chatScroll()
    }, 6500);
  }


    // On "return" handle chat input & display
    if (e.which == 13) {
     if (userName.length === 0) {
      userName = input;
      $chatPage.append(magicEightBallPost(`Welcome ${input}. Ask the Magic Eight Ball any YES or NO question...`));
      chatScroll();
     } else {
      $chatPage.append(userPost(input));
      loadingResponse();
      chatScroll()
      }
    }
  });


});
