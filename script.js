document.addEventListener("DOMContentLoaded", () => {
    const eidCard = document.getElementById("eidCard");
    const flap = document.getElementById("flap");
    const message = document.getElementById("message");
    let isOpen = false;

    // Suara bedug
    const sound = new Audio("Beduk.mp3");

    eidCard.addEventListener("click", () => {
        if (!isOpen) {
            flap.style.transform = "rotateX(-180deg)";
            message.style.transform = "translateY(0)";
            message.style.opacity = "1";
            sound.play();
        } else {
            flap.style.transform = "rotateX(0)";
            message.style.transform = "translateY(-100%)";
            message.style.opacity = "0";
            sound.pause();
            sound.currentTime = 0;
        }
        isOpen = !isOpen;
    });

    // Efek 3D Rotasi
    document.addEventListener("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        eidCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});
