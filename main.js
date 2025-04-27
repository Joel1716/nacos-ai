import { sendMessages } from "./options.js";
import { messageData, computerResponseData } from "./data.js";
/// VARIABLES
const overallContainer = document.querySelector(".overall-container");
function generateLayout() {
  overallContainer.innerHTML = `
      <div class="new-container">
        <header class="new-clicked-header">
          <div class="arrow-pic-name">
            <ion-icon name="arrow-back-outline" class="new-icons arrow-back"></ion-icon>
            <img style="margin-right: 2px" src='img/nacos.jpg' alt='Duck Image' loading='lazy' />
            <p>NACOS &nbsp;AI</p>
          </div>
        </header>
        <section class="message-send-container">
        <h2 class='new-container-message'>New Message</h2>
          <div class="text-container">
               ${sendMessages()}
           </div>
           <div class="input-mic-container">
             <div class="input-container">
               <textarea class="input" placeholder="Message"></textarea>
             </div>
             <button class="send-container">
               <ion-icon name="arrow-forward-outline"></ion-icon>
             </button>
           </div>
        </section> 
      </div>
        `;
  createMessages();
}
generateLayout();
// STYLE FOR CONTAINER

function createMessages() {
  const sendContainer = document.querySelector(".send-container");
  const inputEl = document.querySelector(".input");
  sendContainer.addEventListener("click", () => {
    if (inputEl.value !== "" && inputEl.value !== "\n") {
      sendingMessages(inputEl);
    }
  });
}
function sendingMessages(inputEl) {
  const textContainer = document.querySelector(".text-container");
  /// GETTING THE TIME
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  /////
  const timeMeridianFormat = `${hours}:${minutes}`;
  const timeFormat = `${hours}:${minutes}`;
  const newMessageContainer = document.createElement("div");
  newMessageContainer.classList.add("user-container");
  newMessageContainer.style.marginBottom = "1rem";
  const newMessageText = document.createElement("p");
  newMessageText.innerHTML = inputEl.value;
  const newMessageTime = document.createElement("p");
  newMessageTime.classList.add("user-timer");
  newMessageTime.innerHTML = `${timeMeridianFormat} <ion-icon name="checkmark-done-outline"></ion-icon>`;
  newMessageContainer.append(newMessageText, newMessageTime);
  textContainer.append(newMessageContainer);
  getComputerResponse(inputEl, timeMeridianFormat, timeFormat);
  inputEl.value = "";
}
function getComputerResponse(inputEl, timeMeridianFormat, timeFormat) {
  const textContainer = document.querySelector(".text-container");
  const lowerCase = inputEl.value.toLowerCase();
  const words = lowerCase.split(" ");
  let computerMessage = "";
  computerResponseData.forEach((keyWord) => {
    keyWord.key.forEach((keys) => {
      if (words.includes(keys)) {
        computerMessage = keyWord.message;
      }
    });
  });
  if (computerMessage !== "") {
  } else {
    computerMessage =
      "Sorry i only understand questions concerning NACOS presidential election. Clarify what you are saying";
  }
  setTimeout(() => {
    const computerResponseContainer = document.createElement("div");
    computerResponseContainer.classList.add("user-received-container");
    const computerResponse = document.createElement("p");
    computerResponse.innerHTML = computerMessage;
    const computerTime = document.createElement("p");
    computerTime.innerHTML = timeFormat;
    computerTime.classList.add("user-received-timer");
    computerResponseContainer.append(computerResponse, computerTime);
    textContainer.append(computerResponseContainer);
    console.log(computerMessage);
  }, 1000);
  sendTextToArray(inputEl, timeMeridianFormat, timeFormat, computerMessage);
}

function sendTextToArray(
  inputEl,
  timeMeridianFormat,
  timeFormat,
  computerMessage
) {
  messageData.forEach((data) => {
    data.arrays.push(inputEl.value);
    data.timeMeridian.push(timeMeridianFormat);
    data.time.push(timeFormat);
    data.computerResponse.push(computerMessage);
    localStorage.setItem("nacos", JSON.stringify(messageData));
  });
}
