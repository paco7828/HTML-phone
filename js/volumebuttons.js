var volumeUp = document.querySelector("#phoneButtons").children[0]
volumeUp.style.transition = 'all 0.3s'

volumeUp.addEventListener("click", () => {
   volumeUp.style.right = '-7px'

   setTimeout(function() {
      volumeUp.style.right = '-9.7px'
   }, 500);

   setTimeout(function() {
      //function here
   }, 800);
})

var volumeDown = document.querySelector("#phoneButtons").children[1]
volumeDown.style.transition = 'all 0.3s'

volumeDown.addEventListener("click", () => {
   volumeDown.style.right = '-7px'

   setTimeout(function() {
      volumeDown.style.right = '-9.7px'
   }, 500);

   setTimeout(function() {
      //function here
   }, 800);
})