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

/* ==============================
   Kyrvessa Clicker
   ============================== */

const kyrvessa = document.getElementById("kyrvessa-image");
const kyrvessaClicker = document.getElementById("kyrvessa-clicker");

const normalImage = "images/kyrvessa_normal.png";

const reactionImages = [
    "images/kyrvessa_change0.png",
    "images/kyrvessa_change1.png",
    "images/kyrvessa_change2.png"
];

const specialImage = "images/kyrvessa_change_special.png";

let reactionTimeout;


/* Preload reaction images */

[
    ...reactionImages,
    specialImage
].forEach(function (imagePath) {
    const image = new Image();
    image.src = imagePath;
});


/* Kyrvessa click */

kyrvessaClicker.addEventListener("click", function () {

    clearTimeout(reactionTimeout);

    const isSpecial = Math.random() < 0.05;

    if (isSpecial) {

        kyrvessa.src = specialImage;

    } else {

        const randomIndex = Math.floor(
            Math.random() * reactionImages.length
        );

        kyrvessa.src = reactionImages[randomIndex];
    }


    /* Return to normal after 1.5 seconds */

    reactionTimeout = setTimeout(function () {
        kyrvessa.src = normalImage;
    }, 1500);
});
