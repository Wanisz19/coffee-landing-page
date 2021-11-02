const photo = document.querySelector(".slidephotos");
const menu = document.querySelector(".fa-bars");
const openedmenu = document.querySelector(".openedmenu");
// const listmenu = document.querySelector(".openedmenu > ul");
const listmenu = document.getElementById("lista");
const leftarrow = document.querySelector(".fa-arrow-alt-circle-left");
const rightarrow = document.querySelector(".fa-arrow-alt-circle-right");
const firstCircle = document.querySelector(".first-circle");
const secondCircle = document.querySelector(".second-circle");
const thirdCircle = document.querySelector(".third-circle");


//POKAZYWANIE SIE MENU
menu.addEventListener("click",showMenu);
let changeicon = true;

function showMenu(){
   openedmenu.classList.toggle("hidden")

   if(changeicon){
      menu.classList.remove("fa-bars")
      menu.classList.add("fa-times")
      changeicon = false;
   }
   else{
      menu.classList.remove("fa-times")
      menu.classList.add("fa-bars")
      changeicon = true;
   }
}

//zmiena kolorów kropek



let changeDots = () =>{
      
      if(numberslide === 1){
         firstCircle.classList.add("bolek");
         secondCircle.classList.remove("bolek");
         thirdCircle.classList.remove('bolek');

      }
      else if(numberslide === 2){
         firstCircle.classList.remove("bolek");
         secondCircle.classList.add("bolek");
         thirdCircle.classList.remove('bolek');
      }
      else if(numberslide === 3){
         firstCircle.classList.remove("bolek");
         secondCircle.classList.remove("bolek");
         thirdCircle.classList.add('bolek');

      }
    
    
}



//Ustawienie przemijających zdjęc
let numberslide = 1;

let photos = [{img:"1"},{img:"2"},{img:"3"},]



let mak = window.setInterval(sliders,2800)

function sliders(){
   console.log("WYWOŁANIE")
   console.log(numberslide)

   if(numberslide < 3){
      photo.style.backgroundImage = `url('zdjecia/${photos[numberslide].img}.jpg')`;
   }
   else{
      numberslide = 0;
      photo.style.backgroundImage = `url('zdjecia/${photos[numberslide].img}.jpg')`;
   }
    
   numberslide++;
   photo.classList.add('add')
   
   changeDots();

   setTimeout(() => {
      photo.classList.remove('add')
   }, 200);
}


function StopIntervalLeftArrow(){
   clearInterval(mak);
   numberslide--;
   if(numberslide < 1) numberslide = 3;
   photo.style.backgroundImage = `url('zdjecia/${numberslide}.jpg')`;
   changeDots();
   mak = window.setInterval(sliders,2800)
   

   console.log("left")
}

function StopIntervalRightArrow(){
   console.log("right")
   clearInterval(mak);
   numberslide++;
    if(numberslide > 3) numberslide = 1;
    photo.style.backgroundImage = `url('zdjecia/${numberslide}.jpg')`;
    changeDots();
   mak = window.setInterval(sliders,2800)
   
}




leftarrow.addEventListener("click",StopIntervalLeftArrow) 
rightarrow.addEventListener("click", StopIntervalRightArrow)

firstCircle.addEventListener("click",changeDots);






 //KLIKANIE NA ZAKŁADKI MENU PRZY DESKTOPIE

//  console.log(listmenu)

 
function przejscie(){
   console.log("s");
}

for(i=0; i<listmenu.childElementCount; i++){
   listmenu.children[i].addEventListener("click", przejscie);
}

// console.log(listmenu)







