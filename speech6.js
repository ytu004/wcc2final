document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("input");
  const speakBtn = document.getElementById("speak-btn");
  speakBtn.addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition(); // 将SpeechRecognition改为webkitSpeechRecognition
    recognition.lang = 'zh-CN';
    recognition.start();
  
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      input.value = result;

      // Check if the answer is correct and redirect to the next page
      if (result.toLowerCase() === "八目共赏，赏花赏月赏秋香") {
          window.location.href = "CNEND.html";
        } else if (result.toLowerCase() === "芜湖起飞") {
          // 通关密码，跳转至下一个网页
          window.location.href = "CNEND.html";
        }
        else if (result.toLowerCase() === "鸡你太美") {
          // 通关密码，跳转至下一个网页
          window.location.href = "CNEND.html";
        }
    };
  });
});
