everything()

function everything() {

    var chargeLevelRef = document.getElementById("charge-level");
    if (!chargeLevelRef) {
        chargeLevelRef = document.createElement("div");
        chargeLevelRef.id = "charge-level";
        document.body.appendChild(chargeLevelRef);
    }

    var chargeRef = document.getElementById("charge");
    if (!chargeRef) {
        chargeRef = document.createElement("div");
        chargeRef.id = "charge";
        document.body.appendChild(chargeRef);
    }

    var chargingTimeRef = document.getElementById("charging-time");
    if (!chargingTimeRef) {
        chargingTimeRef = document.createElement("div");
        chargingTimeRef.id = "charging-time";
        document.body.appendChild(chargingTimeRef);
    }

    window.onload = () => {
        if (!navigator.getBattery) {
            alert("Battery Status Api Is Not Supported In Your Browser");
            return false;
        }
    };

    navigator.getBattery().then((battery) => {
        function updateAllBatteryInfo() {
            updateChargingInfo();
            updateLevelInfo();
        }
        updateAllBatteryInfo();

        battery.addEventListener("chargingchange", () => {
            updateAllBatteryInfo();
        });

        battery.addEventListener("levelchange", () => {
            updateAllBatteryInfo();
        });

        function updateChargingInfo() {
            if (battery.charging) {
                chargeRef.classList.add("active");
                chargeLevelRef.classList.add("active1");
                chargingTimeRef.innerText = "";
            } else {
                chargeRef.classList.remove("active");
                chargeLevelRef.classList.remove("active1");
            }
        }

        function updateLevelInfo() {
            let batteryLevel = `${parseInt(battery.level * 100)}%`;
            chargeRef.style.width = batteryLevel;
            chargeLevelRef.textContent = batteryLevel;
        }
    })
}