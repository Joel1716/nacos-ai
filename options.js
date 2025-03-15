import { matchingData } from "./main.js";
import { profileData } from "./profile.js";
/// MAIN STYLE
export function mainStyle(spanActualMessage) {
  let style = `
           <div class="text-container">
               <div class="user-received-container voice-container">
                 <p class="voice-message">${spanActualMessage}</p>
                  <p class="user-received-timer">20:47 PM</p>
               </div>
               ${sendMessages()}
           </div>
           <div class="input-mic-container">
             <div class="input-container">
               <textarea class="input" placeholder="Message"></textarea>
               <div class="smile-icon">
                 <ion-icon class='happy-icon' name="happy-outline"></ion-icon>
               </div>
               <div class="link-camera">
                 <ion-icon name="link-outline" class="link"></ion-icon>
                 <ion-icon name="camera-outline"></ion-icon>
               </div>
             </div>
             <button class="send-container">
               <ion-icon name="arrow-forward-outline"></ion-icon>
             </button>
           </div>`;
  return style;
}

/// ALTERNATIVE STYLE
export function newStyles(actualMessage, originalMessage) {
  if (actualMessage.classList.contains("removed-container")) {
    let removedMessage = `<div class="text-container">
           </div>
           <p class="removed-message">${originalMessage}</p>`;
    return removedMessage;
  } else {
    let voiceMessage = `
     <div class="text-container">
         <div class="user-received-container voice-container">
           <p class="voice-message">${originalMessage}</p>
            <p class="user-received-timer">21:09 PM</p>
         </div>
         ${sendMessages()}
     </div>
      <div class="input-mic-container">
         <div class="input-container">
           <textarea class="input" placeholder="Message"></textarea>
           <div class="smile-icon">
             <ion-icon class='happy-icon' name="happy-outline"></ion-icon>
           </div>
           <div class="link-camera">
             <ion-icon name="link-outline" class="link"></ion-icon>
             <ion-icon name="camera-outline"></ion-icon>
           </div>
         </div>
         <button class="send-container">
           <ion-icon name="arrow-forward-outline"></ion-icon>
         </button>
      </div>`;
    return voiceMessage;
  }
}

function sendMessages() {
  let html = "";
  matchingData.arrays.forEach((userMessage, values) => {
    html += `<div class="user-container">
    <p class="voice-message">${userMessage}</p>
     <p class="user-timer">${matchingData.time[values]}<ion-icon name="checkmark-done-outline"></ion-icon</p>
 </div>
  <div class="user-received-container voice-container">
    <p class="voice-message">${matchingData.computerResponse[values]}</p>
    <p class="user-received-timer">${matchingData.time[values]}</p>
    </div>
 `;
  });
  return html;
}
