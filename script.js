document.addEventListener('DOMContentLoaded', () => {
  // Get the chat icon and chat window elements
  const chatIcon = document.querySelector('.chat-icon img');
const chatWindow = document.querySelector('.chat-circle .chat-window');


  // Add click event listener to chat icon
  chatIcon.addEventListener('click', () => {
    if (chatWindow.style.display === 'block') {
      chatWindow.style.display = 'none';
    } else {
      chatWindow.style.display = 'block';
    }
  });

  // Get the keyword buttons and chat body elements
  const keywordBtns = document.querySelectorAll('.keyword-btn');
  const chatBody = document.querySelector('.chat-body');

  // Add click event listener to each keyword button
  keywordBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Get the text content of the clicked button
      const keyword = btn.textContent.trim();

      // Check which keyword was clicked and display appropriate message
      switch (keyword) {
        case 'Help me!':
          chatBody.innerHTML +=
            '<div class="bot-message">Please click on Location Sharing and then click to share live location.</div>';
          break;
        case 'I want to help':
          chatBody.innerHTML +=
            '<div class="bot-message">Please go to our Aid section and fill the form for it. BTW, thanks for helping us.</div>';
          break;
        case 'Instant help needed!':
          chatBody.innerHTML += '<div class="bot-message">Click on red button on top center for instant help.</div>';
          break;
        default:
          break;
      }
    });
  });

  // Get the send button and user message input elements
  const sendBtn = document.querySelector('.send-btn');
  const userInput = document.querySelector('.user-input');

  // Add click event listener to send button
  sendBtn.addEventListener('click', () => {
    // Get the user message input value
    const userMessage = userInput.value.trim();

    // If user message is not empty, display it in chat body and clear the input
    if (userMessage) {
      chatBody.innerHTML += `<div class="user-message">${userMessage}</div>`;
      userInput.value = '';
    }
  });

  // Get the close button element
  const closeBtn = document.querySelector('.close-btn');

  // Add click event listener to close button
  closeBtn.addEventListener('click', function () {
    // Hide the chat window
    chatWindow.style.display = 'none';
  });

  // Add click event listener to document
  document.addEventListener('click', function (event) {
    // If click event occurred outside of chat window and chat icon, close the chat window
    if (!event.target.closest('.chat-icon') && !event.target.closest('.chat-window')) {
      chatWindow.style.display = 'none';
    }
  });
});

const helpButton = document.getElementById('help-button');
const helpDialog = document.getElementById('help-dialog');
const helpHeading = document.getElementById('help-heading');
const helpMessage = document.getElementById('help-message');
const closeHelpDialog = document.getElementById('close-help-dialog');

let clicks = 0;
let lat = 0;
let lng = 0;

helpButton.addEventListener('click', () => {
  clicks++;
  if (clicks === 3) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        helpHeading.textContent = 'Help Notification Sent!';
        helpMessage.textContent = `We've sent a help notification to someone within 500 meters of (${lat}, ${lng}).`;
        helpDialog.classList.remove('hidden');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    clicks = 0;
  }
});

closeHelpDialog.addEventListener('click', () => {
  helpDialog.classList.add('hidden');
});
const aboutBtn = document.querySelector('.about');
const aboutPopup = document.querySelector('.about-popup');
const closeBtn = document.querySelector('.close-btn');

aboutBtn.addEventListener('click', () => {
  aboutPopup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  aboutPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == aboutPopup) {
    aboutPopup.style.display = 'none';
  }
});
