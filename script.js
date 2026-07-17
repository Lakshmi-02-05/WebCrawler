const urlInput = document.getElementById("url");
const crawlBtn = document.getElementById("crawlBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");

crawlBtn.addEventListener("click", function () {

    const url = urlInput.value.trim();
    loading.textContent = "";
    results.innerHTML = "";
    if (url === "") {
        alert("Please enter a URL");
        return;
    }
    try {
        new URL(url);
    }
    catch {
        results.innerHTML = `<p>❌ Invalid URL</p>`;
        return;
    }
        
//     loading.textContent = "Crawling website...";
//     setTimeout(function () {
//         loading.textContent = "";
//         const currentTime = new Date();
//         const time = currentTime.toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit"
//         });
//         results.innerHTML = `
//             <h2>SEO Report</h2>
//             <p><strong>Website:</strong> ${url}</p>
//             <p><strong>Status:</strong> Success ✅</p>
//             <p><strong>Time Crawled:</strong> ${time}</p>
//         `;
//     }, 2000);
// });

    loading.textContent = "Sending URL to backend...";
    // only for git 
    fetch("https://special-guacamole-7v4qp7q9x7wg3p7pg-3000.app.github.dev/crawl" , {
    // fetch("http://localhost:3000/crawl", { // for local device
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            url: url
        })

    })
    .then(function(response) {

        return response.text();

    })
    .then(function(data) {

        loading.textContent = "";

        results.innerHTML = `
            <h2>${data}</h2>
        `;

});
});