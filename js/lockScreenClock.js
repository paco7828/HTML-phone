clock();
function clock() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();

    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;

    const month = today.getMonth();
    const day = today.getDate();

    const monthList = [
        "január",
        "február",
        "március",
        "április",
        "május",
        "június",
        "július",
        "augusztus",
        "szeptember",
        "október",
        "november",
        "december"
    ];

    const date = monthList[month] + " " + day;
    const time = hour + ":" + minute;

    const dateElem = document.getElementById("date");
    const timeElem = document.getElementById("time");
    
    if (dateElem && timeElem) { // check if the elements exist
        dateElem.innerHTML = date;
        timeElem.innerHTML = time;
    }

    setTimeout(clock, 1000);
}
