
console.log("My website is working!");

document.title = "My Personal Portfolio";

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light mode";
    } else {
        themeButton.textContent = "🌙 Dark mode";
    }

});
