function calculate() {
    const total = parseInt(document.getElementById("totalClasses").value);
    const attended = parseInt(document.getElementById("attendedClasses").value);
    const minPercent = parseFloat(document.getElementById("minPercent").value);
    const perDay = parseInt(document.getElementById("classesPerDay").value);
    const resultDiv = document.getElementById("result");
    const animDiv = document.getElementById("animation");
  
    if (isNaN(total) || isNaN(attended) || isNaN(minPercent) || isNaN(perDay)) {
      resultDiv.innerText = "Please fill in all fields!";
      animDiv.innerHTML = "";
      return;
    }
  
    const currentPercent = (attended / total) * 100;
  
    if (currentPercent >= minPercent) {
        let maxBunks = Math.floor((attended - (minPercent / 100) * total) / (minPercent / 100));
        let days = Math.floor(maxBunks / perDay);
        resultDiv.innerText = `You're safe! You can bunk approximately ${maxBunks} classes (~${days} days).`;
        animDiv.innerHTML = "😊";
        animDiv.className = "happy";
    } else {
        let x = 0;
        while (((attended + x) / (total + x)) * 100 < minPercent) {
            x++;
        }
        let days = Math.ceil(x / perDay);
        resultDiv.innerText = `You need to attend ${x} more classes (~${days} days) to reach ${minPercent}% attendance.`;
        animDiv.innerHTML = "😔";
        animDiv.className = "sad";
    }
  }