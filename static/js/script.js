  const chatbotBtn = document.getElementById("chatbot-btn");
  const chatbotPopup = document.getElementById("chatbot-popup");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  chatbotBtn.addEventListener("click", () => {
    chatbotPopup.style.display = "block";
  });

  closeChat.addEventListener("click", () => {
    chatbotPopup.style.display = "none";
  });

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (msg) {
      const userMsg = document.createElement("p");
      userMsg.classList.add("text-end", "text-dark", "fw-bold");
      userMsg.innerText = msg;
      chatMessages.appendChild(userMsg);
      chatInput.value = "";

      setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.classList.add("text-muted", "small");
        botMsg.innerText = "🤖 I'm an Emergency assistant. Please call at 112, our team will respond immediately.";
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 600);
    }
  }
