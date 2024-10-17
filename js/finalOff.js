var onOffButton = document.querySelector("#phoneButtons").children[2]
onOffButton.style.transition = 'all 0.3s'
onOffButton.addEventListener("click", () => {
    window.addEventListener("DOMContentLoaded", () => {

        setTimeout(function () {

            screen.innerHTML = ``

            screen.style.zIndex = "-1"
            screen.style.backgroundImage = "none"
            screen.style.backgroundColor = "#000"

        }, 800);
    })
})
