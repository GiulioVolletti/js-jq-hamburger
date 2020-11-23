console.log("hello world");

var hamburgerButton = $(".hamburger-menu");
var iconHamburger = $("i.fa-bars")
var iconX = $("i.fa-times");

// console.log("icona", iconHamburger);
// console.log("icona", iconX);
// console.log(hamburgerButton);
iconHamburger.click(
  function (){
      hamburgerButton.fadeIn(1000);
  }
);
iconX.click(
  function(){
    hamburgerButton.fadeOut(1000);
  }
)
