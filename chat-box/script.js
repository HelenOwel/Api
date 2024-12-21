// script.js

// Function to simulate sending a message
// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const chatBox = document.getElementById("chat-box");
//     const userMessage = inputField.value;
//     const selectedLanguage = document.getElementById("language-select").value;
  
//     if (userMessage.trim() === "") return;
  
//     // Display user's message
//     const userMessageElement = document.createElement("div");
//     userMessageElement.classList.add("message", "user");
//     userMessageElement.textContent = userMessage;
//     chatBox.appendChild(userMessageElement);
  
//     // Simulate bot reply
//     const botMessageElement = document.createElement("div");
//     botMessageElement.classList.add("message", "bot");
//     botMessageElement.textContent = translateMessage(userMessage, selectedLanguage);
//     chatBox.appendChild(botMessageElement);
  
//     // Clear input field
//     inputField.value = "";
  
//     // Scroll chat box to the bottom
//     chatBox.scrollTop = chatBox.scrollHeight;
//   }
  
//   // Function to "translate" message based on selected language
//   function translateMessage(message, language) {
//     const translations = {
//       en: "You said: " + message,
//       fr: "Vous avez dit: " + message,
//       es: "Dijiste: " + message,
//       de: "Du hast gesagt: " + message
//     };
  
//     return translations[language] || message;
//   }
  
// let arr = [1,2,3,4,5];
// let nex = arr.map(function(x){
//     return x * x
// })
// console.log(nex)

// let p = new Promise((resole, reject)=>{
//     let x = 0;
//     if(x == 0){
//         resole("ok")
//     }else{
//         reject("error")
//     }
// })
// console.log(p)
// p.then(function(resolved){
//     console.log("ok")
// },function(reject){
//     console.log("error")
// })

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("ok")
//     },2000)
// });
// p.then(value=>console.log(value)).catch(error => (error))


