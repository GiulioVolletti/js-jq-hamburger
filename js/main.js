console.log("hello world");

var hamburgerButton = $(".hamburger-menu");
// console.log(hamburgerButton);
var ancorIcon = $("a")
console.log(ancorIcon);

var display = false;
ancorIcon.click(
  function(){
  if ( display == false){
  hamburgerButton.fadeIn(1000);
    display = true;

  } else  {
    hamburgerButton.fadeOut(1000);
    display = false;

  }
}
)


// -------alternativa------- //

// var iconHamburger = $("i.fa-bars")
// var iconX = $("i.fa-times");
// // console.log("icona", iconHamburger);
// // console.log("icona", iconX);
//
// iconHamburger.click(
//   function (){
//       hamburgerButton.fadeIn(1000);
//   }
// );
// iconX.click(
//   function(){
//     hamburgerButton.fadeOut(1000);
//   }
// )
