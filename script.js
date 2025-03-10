// Debug to confirm script is loaded
console.log("script.js loaded");

// Toggle mobile menu
const menuToggle = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    console.log("Menu elements found");
    menuToggle.addEventListener('click', () => {
        console.log("Hamburger menu clicked");
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            console.log("Menu link clicked, closing menu");
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            console.log("Menu link clicked, closing menu");
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
} else {
    console.error("Menu or navMenu element not found");
}

    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            console.log("Menu closed by link click"); // Debug log
        }
    });
 

// Close menu when clicking a link
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Chatbot functionality (for assistant.html)
const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'assistant');
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to latest message
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, true);

    // Simulate HooHaa's response
    setTimeout(() => {
        let response = '';
        if (message.toLowerCase().includes('hello')) {
            response = "Hello! I'm HooHaa, your AI assistant. How can I help you today?";
        } else if (message.toLowerCase().includes('reminder')) {
            response = "Sure, I can set a reminder! Please tell me what and when.";
        } else if (message.toLowerCase().includes('what can you do')) {
            response = "I can understand voice commands, set reminders, answer questions, and provide personalized assistance. Ask me anything!";
        } else {
            response = "I'm not sure how to respond to that yet, but I'm learning! Try asking about reminders or what I can do.";
        }
        addMessage(response);
    }, 500); // Simulate delay for response

    // Clear input
    userInput.value = '';
}

// Allow sending message with Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});