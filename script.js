// Implementation of onscroll browser object model function for social icon
//Get the button back to top button
let mybutton = document.getElementById("fixedShareDiv");

let mybutton2 = document.getElementById("back-to-top");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    // console.log("Scrolled")
    scrollFunction();
    scrollFunction2();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 1350) {
        mybutton.style.display = "none";
    }
    else {
        mybutton.style.display = "block";
    }
}

function scrollFunction2() {
    if (document.documentElement.scrollTop < 250) {
        mybutton2.style.display = "none";
    }
    else {
        mybutton2.style.display = "block";
    }
}


// Code for setting cookies
// const setCookie = (cName, cValue, expDays) => {
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     creating cookies at homepage using path if we have to set co
//     document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
//     For multiple path cookies
//     document.cookie = cName + "=" + cValue + ";" + expires + "; path=/, path=/about, path=/blogs, path=/career,";
// }

// getCookie = (cName) => {
//     const name = cName + "=";
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArr = cDecoded.split("; ");
//     let value;
//     cArr.forEach(val => {
//         if (val.indexOf(name) === 0) {
//             value = val.substring(name.length)
//         };
//     })

//     return value;
// }


// created an query selector onclick button for accept the cookies
// document.querySelector("#cookies-btn").addEventListener("click", () => {
//     document.querySelector("#cookies").style.display = "none";
//     setCookie("cookie", true, 30);
// })

// Button created to close the pop up of cookies
document.querySelector("#closeCookie").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
})

// If number of cookies are zero in the browser it will display the pop up
// cookieMessage = () => {
//     if (!getCookie("cookie")) {

//         document.querySelector("#cookies").style.display = "block";
//     }
//     else {
//         document.querySelector("#cookies").style.display = "none";
//     }
// }

// window.addEventListener("load", cookieMessage);


admissionForm = () => {
    document.querySelector("#admissionModal").style.display = "block";
}

// Button created to close the pop up of admission Form
document.querySelector("#closeAdmission").addEventListener("click", () => {
    document.querySelector("#admissionModal").style.display = "none";
})


window.addEventListener("load", admissionForm);

// Js for dark mode
// let icon=document.getElementById("icon-dark");
// icon.onclick=function(){
//     document.body.classList.toggle("dark-theme");
// }



// Creating a function of google language translate API
function loadGoogleTranslate() {

    // page language defines the default language
    new google.translate.TranslateElement({ pageLanguage: 'en' }, "google_translate_element");
    // new google.translate.TranslateElement("google_element2");
}


// Creating a variable of Auto Typing Effect Using Build In Function of CDN in index page
let typed = new Typed(".auto-type", {
    strings: ["Websites", "Applications", "Software"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


// craeting a function to toggle dark mode and light mode
// creating a funtion to change class in tag
function changeClass(name1, name2) {
    body.classList.remove(name1);
    body.classList.add(name2);
    // btn.src="icons/"+name2+".svg";
}


// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage=null; // Variable to store user's message
// // const API_KEY = "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";
// const API_KEY = "1dbe90f177msh6129ff1b21ff884p166020jsn8349ccb9c264"; // Paste your API key here
// const inputInitHeight = chatInput.scrollHeight;

// const createChatLi = (message, className) => {
// // Create a chat <li> element with passed message and className
// const chatLi = document.createElement("li");
// chatLi.classList.add("chat", `${className}`);
// let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
// chatLi.innerHTML = chatContent;
// chatLi.querySelector("p").textContent = message;
// return chatLi; // return chat <li> element
// }

// const generateResponse = (incomingChatLi) => {
// const API_URL = "https://open-ai21.p.rapidapi.com/conversation";
// const messageElement = incomingChatLi.querySelector("p");

// // Define the properties and message for the API request
// const requestOptions = {
// method: "POST",
// headers: {
//     "Content-Type": "application/json",
//     "X-RapidAPI-Key": `${API_KEY}`,
//     'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
// },
// body: JSON.stringify({
//     // model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: userMessage }],
//     max_token: 500,
//     temperature: 1,
//     web_access: false
//     // temperature: 1,
//     // max_tokens: 256,
//     // top_p: 1,
//     // frequency_penalty: 0,
//     // presence_penalty: 0
// })
// }


// // Send POST request to API, get response and set the reponse as paragraph text
// fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
// messageElement.textContent = data.ChatGPT;//targenting the json content and forward
// }).catch((error) => {
// messageElement.classList.add("error");
// messageElement.textContent = "Oops! Something went wrong. Please try again.";
// }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// }

// const handleChat = () => {
// userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
// if (!userMessage) return;

// // Clear the input textarea and set its height to default
// chatInput.value = "";
// chatInput.style.height = `${inputInitHeight}px`;

// // Append the user's message to the chatbox
// chatbox.appendChild(createChatLi(userMessage, "outgoing"));
// chatbox.scrollTo(0, chatbox.scrollHeight);

// setTimeout(() => {
// // Display "Thinking..." message while waiting for the response
// const incomingChatLi = createChatLi("Thinking...", "incoming");
// chatbox.appendChild(incomingChatLi);
// chatbox.scrollTo(0, chatbox.scrollHeight);
// generateResponse(incomingChatLi);
// }, 600);
// }

// // Adding Scroll Bar For Long Chat
// chatInput.addEventListener("input", () => {
// // Adjust the height of the input textarea based on its content
// chatInput.style.height = `${inputInitHeight}px`;
// chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
// // If Enter key is pressed without Shift key and the window 
// // width is greater than 800px, handle the chat
// if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
// e.preventDefault();
// handleChat();
// }
// });

// sendChatBtn.addEventListener("click", handleChat);
// closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));









// btn.src="icons/"+ body.getAttribute("class") + ".svg";


