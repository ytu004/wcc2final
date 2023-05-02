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
      if (result.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase() === "十室九贫凑得八两七钱六分五毫四厘尚且三心二意一等下流") {
        window.location.href = "CN2.html";
      } else if (result.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase() === "芜湖起飞") {
        // 通关密码，跳转至下一个网页
        window.location.href = "CN2.html";
      } else if (result.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase() === "鸡你太美") {
        // 通关密码，跳转至下一个网页
        window.location.href = "CN2.html";
      }
      
    };
  });
});
