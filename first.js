// 1. connect js file 

// 2. every h2 tag color 

var h2Elements = document.getElementsByTagName("h2");

        for(var i = 0; i < h2Elements.length; i++) {
          h2Elements[i].style.color = "indigo";
        }

// 3. set backpacks background color 

var bagsbgcolor = document.getElementById('backpacks');
bagsbgcolor.style.backgroundColor="tomato";

// 4.have to change border-radius in every card

    var cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
         cards[i].style.borderRadius="30px";
        
        
        }
    
// 5.
let buttons = document.getElementsByClassName('remove')
  for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click",function () {
    this.parentNode.remove();


   });
  }