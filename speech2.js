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
        if (result.toLowerCase() === "I'm a wordsmith, a poet, with verses so tight, your insults are weak, your rhymes are just trite.") {
            window.location.href = "VK3.html";
          } else if (result.toLowerCase() === "it is the time") {
            // 通关密码，跳转至下一个网页
            window.location.href = "VK3.html";
          }
          else if (result.toLowerCase() === "it’s the time") {
            // 通关密码，跳转至下一个网页
            window.location.href = "VK3.html";
          }
      };
    });
  });
  
