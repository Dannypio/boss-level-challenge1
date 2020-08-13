function randomNumber1() {

   var x1 = Math.floor(Math.random() * 6)+1;
   var x2 = Math.floor(Math.random() * 6)+1;
   document.querySelector(".img1").setAttribute("src","images/dice"+x1+".png");
   document.querySelector(".img2").setAttribute("src","images/dice"+x2+".png");

   if (x1 > x2) {
     document.querySelector("h1").textContent="Player 1 win";
   }
   else if (x2 > x1) {
     document.querySelector("h1").textContent="Player 2 win";
   }
   else{
      document.querySelector("h1").textContent="Draw";
   }

}
