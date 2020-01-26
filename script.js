setInterval(() => {
    const timeText = new Date().toLocaleString("ja-JP")
    document.querySelector("#currentTime").textContent = timeText
}, 1000);
