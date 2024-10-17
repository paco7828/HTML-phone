var fingerPrint = document.querySelector("#fingerPrint")
var screen = document.getElementById("screen")

fingerPrint.addEventListener("click", () => {
    //window.location.href = "mainScreen.html"
    screen.innerHTML = `<div id="buttonHelpBox"></div>

        <div class="wrapper">
            <p id="description"></p>
            <p id="temp"></p>
            <h4 id="date-time"></h4>
            <h3 id="cityName"><img src="images/location.png"> Pécs</h3>
        </div>

        <div id="centerGrid">

            <a href="chat.html">
                <div id="grey">
                    <img src="images/discord.jpg">
                    <img src="images/instagram.jpg">
                    <img src="images/messenger.jpg">
                    <img src="images/snapchat.jpg">
                    <h6 style="left: 11px;">Chat</h6>
                </div>
            </a>

            <a href="google.html">
                <div id="grey">
                    <img src="images/google.jpg">
                    <img src="images/gmail.jpg">
                    <img src="images/googlemaps.jpg">
                    <img style="width: 12px" src="images/youtube.jpg">
                    <img src="images/googledrive.jpg">
                    <img src="images/googlephotos.jpg">
                    <img src="images/googleplay.jpg">
                    <h6>Google</h6>
                </div>
            </a>
            
            <a href="eszkozok.html">
                <div id="grey">
                    <img src="images/calculator.jpg">
                    <img src="images/voicerecorder.jpg">
                    <img src="images/settings.png">
                    <img src="images/notes.png">
                    <img src="images/clock.jpg">
                    <img src="images/gallery.png">
                    <img src="images/calendar.jpg">
                    <h6>Eszközök</h6>
                </div>
            </a>

            <div><img src="images/life360.jpg">
                <h6>Life360</h6>
            </div>

            <div><img src="images/telekom.jpg">
                <h6>Telekom</h6>
            </div>

            <div><img src="images/kreta.jpg">
                <h6>Kréta</h6>
            </div>

            <a href="spotifyScreen.html">
                <div><img src="images/spotify.jpg">
                    <h6>Spotify</h6>
                </div>
            </a>

            <div><img src="images/otp.jpg">
                <h6 style="width: 50px; height: 10px; bottom: -41px; left: 5px;">OTP Bank</h6>
            </div>

            <div><img src="images/kamera.jpg">
                <h6>Kamera</h6>
            </div>

            <div><img src="images/filc.jpg">
                <h6 style="width: 50px; left: 5px;">Filc Napló</h6>
            </div>

        </div>

        <div id="bottomGrid">
            <div><img src="images/telefon.jpg"></div>
            <div><img src="images/uzenetek.jpg"></div>
            <div><img src="images/chrome.jpg"></div>
        </div>

        <div id="homeGrid">
            <div id="homeLeft">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <div id="homeCenter">
                <div></div>
            </div>
            <div id="homeRight">
                <div></div>
                <div></div>
            </div>
        </div>
        <div id="frontcam">
            <div id="frontcamlense"></div>
        </div>
        <div id="phoneButtons">
            <div></div>
            <div></div>
            <div></div>
        </div>`
    //add homegrid.css, hovers.css, weather.css, mainScreen.css -----CSS------
    //add weather.js, mainScreenClock.js, finalOff.js, -------------JS---------
    //remove batteryAPI.css, lockScreen.css              ------------CSS-------
    //remove lockScreenClock.js, batteryAPI.js, fingerPrint.js -------JS-------

    var linksPath = ['css/homeGrid.css', 'css/hovers.css', 'css/weather.css', 'css/mainScreen.css', 'js/weather.js', 'js/mainScreenClock.js', 'js/finalOff.js']

    const linkElements = []

    for (let i = 0; i < 4; i++) {
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

    const removeableLinkelements = ['css/batteryAPI.css', 'css/lockScreen.css', 'js/lockScreenClock.js', 'js/batteryAPI.js', 'js/fingerPrint.js'];

    removeableLinkelements.forEach(href => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) {
            link.parentNode.removeChild(link);
        }
    });

    removeableLinkelements.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
            script.parentNode.removeChild(script);
        }
    });
})
