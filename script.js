document.querySelectorAll(".copy-button").forEach(function (button) {
    button.addEventListener("click", function () {

        const address = button
            .closest(".wallet-content")
            .querySelector(".wallet-address")
            .textContent
            .trim();

        navigator.clipboard.writeText(address);

        const originalText = button.textContent;

        button.textContent = "COPIED!";

        setTimeout(function () {
            button.textContent = originalText;
        }, 1500);
    });
});
