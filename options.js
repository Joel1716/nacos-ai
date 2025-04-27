import { messageData } from "./data.js";

export function sendMessages() {
  let html = "";
  messageData.forEach((data) => {
    data.arrays.forEach((userMessage, values) => {
      html += `<div class="user-container">
  <p class="voice-message">${userMessage}</p>
   <p class="user-timer">${data.time[values]}<ion-icon name="checkmark-done-outline"></ion-icon</p>
</div>
<div class="user-received-container voice-container">
  <p class="voice-message">${data.computerResponse[values]}</p>
  <p class="user-received-timer">${data.time[values]}</p>
  </div>
`;
    });
  });
  return html;
}
