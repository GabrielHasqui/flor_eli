document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");
    const message = document.getElementById("message");

    petals.forEach(petal => {
        petal.addEventListener("mouseover", () => {
            petal.style.transform = "scale(1.1)";
            petal.style.boxShadow = "0px 0px 60px rgba(245, 148, 184, 1)";
        });

        petal.addEventListener("mouseout", () => {
            petal.style.transform = "scale(1)";
            petal.style.boxShadow = "0px 0px 60px rgba(245, 148, 184, .5)";
        });

        petal.addEventListener("click", () => {
            petal.style.animation = "fallingPetal 3s forwards";
            petal.addEventListener("animationend", () => {
                petal.style.display = "none";
                checkPetals();
            });
        });
    });

    function checkPetals() {
        const remainingPetals = document.querySelectorAll(".petal:not([style*='display: none'])");
        if (remainingPetals.length === 0) {
            message.textContent = "Todos los pétalos han caído, pero mi amor sigue siendo eterno ❤️";
        }
    }
});
