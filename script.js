// Render current URL's UTM parameters into the debug table.
(function renderUtmDebug() {
    const table = document.querySelector("#utmTable tbody");
    if (!table) return;
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    const params = new URLSearchParams(window.location.search);
    for (const key of keys) {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const value = document.createElement("td");
        name.textContent = key;
        value.textContent = params.get(key) ?? "(not set)";
        row.appendChild(name);
        row.appendChild(value);
        table.appendChild(row);
    }
})();

// Preserve incoming query string when navigating to thankyou.html so GA/UET
// on the conversion page see the same campaign attribution.
document
    .getElementById("leadForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "thankyou.html" + window.location.search;
    });
