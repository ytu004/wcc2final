document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("input");
    const speakBtn = document.getElementById("speak-btn");
    speakBtn.addEventListener("click", () => {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();
    
      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        input.value = result;
  
        // Check if the answer is correct and redirect to the next page
        if (result.toLowerCase() === "my verses are clever, my insults obscene, you're just like your dad, but your mom is a queen") {
            window.location.href = "VK2.html";
          } else if (result.toLowerCase() === "it is the time") {
            // 通关密码，跳转至下一个网页
            window.location.href = "VK2.html";
          }
          else if (result.toLowerCase() === "it’s the time") {
            // 通关密码，跳转至下一个网页
            window.location.href = "VK2.html";
          }
      };
    });
  });
  
