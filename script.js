const urlInput = document.getElementById("url");
const crawlBtn = document.getElementById("crawlBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");

crawlBtn.addEventListener("click", function () {

    const url = urlInput.value.trim();
    if (url === "") {
        alert("Please enter a URL");
        return;
    }
    loading.textContent = "Crawling website...";
    setTimeout(function () {
        loading.textContent = "";
        const currentTime = new Date();
        const time = currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        results.innerHTML = `
            <h2>SEO Report</h2>
            <p><strong>Website:</strong> ${url}</p>
            <p><strong>Status:</strong> Success ✅</p>
            <p><strong>Time Crawled:</strong> ${time}</p>
        `;
    }, 2000);
});