window.addEventListener("DOMContentLoaded", () => {

    var onOffButton = document.querySelector("#phoneButtons").children[2]
    onOffButton.style.transition = 'all 0.3s'
    var clickCount = 0
    var screen = document.getElementById("screen")

    onOffButton.addEventListener("click", () => {
        clickCount += 1
        onOffButton.style.right = '-7px'

        setTimeout(function () {
            onOffButton.style.right = '-9.7px'
        }, 500);

        if (clickCount == 1) {
            setTimeout(function () {

                screen.innerHTML = `
                <img src="images/lock.png">
                <div id="clock">
                    <h4 id="time"></h4>
                    <h1 id="date"></h1>
                    </div>
                    
                    <div id="battery">
                        <div id="charge"></div>
                        <div id="charge-level"></div>
                        </div>
                        <div id="charging-time"></div>
                        
                        <div id="fingerPrint">
                            <img src="images/fingerprint.png">
                            </div>
                            
                            
                            
                            <div id="frontcam">
                <div id="frontcamlense"></div>
            </div>
            `

                screen.style.zIndex = "1"
                screen.style.backgroundImage = "url(css/phoneBG.jpg)"
                screen.style.backgroundColor = "none"

                var linksPath = ['css/batteryAPI.css', 'css/hovers.css', 'css/lockScreen.css', 'js/lockScreenClock.js', 'js/batteryAPI.js', 'js/fingerPrint.js']

                const linkElements = []

                for (let i = 0; i < 3; i++) {
                    const newLink = document.createElement("link")
                    linkElements.push(newLink)
                    newLink.setAttribute('rel', 'stylesheet')
                    newLink.setAttribute('href', linksPath[i])
                    document.head.appendChild(newLink)
                }

                for (let i = 3; i < 6; i++) {
                    const newScript = document.createElement("script")
                    linkElements.push(newScript)
                    newScript.setAttribute('src', linksPath[i])
                    document.head.appendChild(newScript)
                }

            }, 800);
        }
        else if (clickCount == 2) {
            setTimeout(function () {
                var linksPath = ['css/batteryAPI.css', 'css/hovers.css', 'css/lockScreen.css', 'js/lockScreenClock.js', 'js/batteryAPI.js', 'js/fingerPrint.js']

                const linkElements = document.querySelectorAll('link, script')
                linkElements.forEach(element => {
                    if (linksPath.includes(element.getAttribute('href')) || linksPath.includes(element.getAttribute('src'))) {
                        document.head.removeChild(element)
                    }
                })

                screen.innerHTML = ``

                screen.style.zIndex = "-1"
                screen.style.backgroundImage = "none"
                screen.style.backgroundColor = "#000"


                clickCount = 0

            }, 800);
        }
    })
})