window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        const hours = today.getHours();
        const minutes = today.getMinutes();

        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;

        const time = hour + ":" + minute;

        document.getElementById("date-time").innerHTML = time;
        setTimeout(clock, 1000);
    }
});