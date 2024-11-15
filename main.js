import { mainStyle, newStyles } from "./options.js";
import { firstArray } from "./data.js";
import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js";

/// VARIABLES
const overallContainer = document.querySelector(".overall-container");
const messagesContainer = document.getElementById("js-messages");
const main = document.getElementById("js-main");
const headerEl = document.getElementById("header");
const spanEl = document.querySelector(".span");
const chatNumber = document.querySelector(".chat-number");
const actualTime = document.querySelector(".actual-time");

export let matchingData;
messagesContainer.addEventListener("click", containers);
function containers(event) {
  let clickedElement = event.target;
  while (clickedElement !== messagesContainer) {
    if (clickedElement.classList.contains("messages")) {
      const elementData = clickedElement.dataset.profileId;
      firstArray.forEach((data) => {
        if (elementData == data.id) {
          matchingData = data;
        }
      });
      console.log(matchingData);
      const imageElement = clickedElement.querySelector("img");
      imageElement.classList.add("clicked-image");
      const titleElement = clickedElement.querySelector(".title");
      const actualMessage = clickedElement.querySelector(".actual-message");
      const spanActualMessage =
        clickedElement.querySelector("#js-span-message");
      const defaultCondition =
        spanActualMessage === null
          ? newStyles(actualMessage)
          : mainStyle(spanActualMessage);
      // if (elementData == 1) {
      //   spanEl.style.display = "none";
      //   chatNumber.style.display = "none";
      //   actualTime.style.color = "rgb(151, 151, 151)";
      // }
      // Handle profile clicks
      // messagesContainer.addEventListener("click", (event) => {
      //   if (clickedElement.classList.contains("profile")) {
      //     chatNumber.classList.add("hidden"); // Hide the chat number
      //     sessionStorage.setItem("chatNumberVisible", "false"); // Save state in sessionStorage
      //   }
      // });
      // document.addEventListener("DOMContentLoaded", () => {
      //   const isChatNumberVisible =
      //     sessionStorage.getItem("chatNumberVisible") === "true";
      //   if (!isChatNumberVisible) {
      //     chatNumber.classList.add("hidden"); // Hide the element if not visible
      //   }
      // });
      const containerStyles = overallContainer.innerHTML;
      overallContainer.innerHTML = `
      <div class="new-container">
        <header class="new-clicked-header">
          <div class="arrow-pic-name">
            <ion-icon name="arrow-back-outline" class="new-icons arrow-back"></ion-icon>
            ${imageElement.outerHTML}
            <p>${titleElement.innerHTML}</p>
          </div>
          <div class="new-icons-container">
            <input type="file" id="image-input" accept="image/*" style="display: none;" multiple>
            <ion-icon name="videocam-outline" class="new-icons"></ion-icon>
            <ion-icon name="call-outline" class="new-icons"></ion-icon>
            <ion-icon
              name="ellipsis-vertical-outline"
              class="new-icons"
            ></ion-icon>
          </div>
        </header>
        <section class="message-send-container">
        <h2 class='new-container-message'>New Message</h2>
          ${defaultCondition}
        </section> 
      </div>
        `;
      createMessages(actualMessage);
      // STYLE FOR CONTAINER
      headerEl.style.padding = "0";
      removeMessage(containerStyles);
      break;
    }
    clickedElement = clickedElement.parentElement;
  }
}

function createMessages(actualMessage) {
  const sendContainer = document.querySelector(".send-container");
  const inputEl = document.querySelector(".input");
  if (actualMessage.classList.contains("removed-container")) {
    return;
  } else {
    sendContainer.addEventListener("click", () => {
      if (inputEl.value !== "" && inputEl.value !== "\n") {
        sendingMessages(inputEl);
      }
    });
  }
}
function sendingMessages(inputEl) {
  const textContainer = document.querySelector(".text-container");
  /////
  const time = dayjs();
  const timeFormat = time.format("HH:mm A");
  const newMessageContainer = document.createElement("div");
  newMessageContainer.classList.add("user-container");
  newMessageContainer.style.marginBottom = "1rem";
  const newMessageText = document.createElement("p");
  newMessageText.innerHTML = inputEl.value;
  const newMessageTime = document.createElement("p");
  newMessageTime.classList.add("user-timer");
  newMessageTime.innerHTML = `${timeFormat} <ion-icon name="checkmark-done-outline"></ion-icon>`;
  newMessageContainer.append(newMessageText, newMessageTime);
  textContainer.append(newMessageContainer);
  sendTextToArray(inputEl, timeFormat);
  inputEl.value = "";
}
function removeMessage(containerStyles) {
  document.querySelector(".arrow-back").addEventListener("click", () => {
    overallContainer.innerHTML = containerStyles;
    const messagesContainer = document.getElementById("js-messages");
    messagesContainer.addEventListener("click", containers);
  });
  // window.addEventListener("keydown", (event) => {
  //   if (event.key === "Backspace") {
  //     overallContainer.innerHTML = containerStyles;
  //     const messagesContainer = document.getElementById("js-messages");
  //     messagesContainer.addEventListener("click", containers);
  //   }
  // });
}

function sendTextToArray(inputEl, timeFormat) {
  matchingData.arrays.push(inputEl.value);
  matchingData.time.push(timeFormat);
  localStorage.setItem("messages", JSON.stringify(firstArray));
  console.log(matchingData.arrays);
}
