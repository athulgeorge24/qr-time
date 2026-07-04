const now = new Date();

const date = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

const time = now.toLocaleTimeString("en-IN");

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("date").textContent = date;
document.getElementById("time").textContent = time;
document.getElementById("timezone").textContent = timezone;