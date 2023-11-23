const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  gameContainer.innerHTML = '';
  // for (let color of colorArray) {
for(let i = 0; i < colorArray.length; i++) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    // newDiv.classList.add(color);
    newDiv.classList.add(colorArray[i]);
    // newDiv.setAttribute('num',i)
    newDiv.innerText = i;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


  let score = 0;
  let counter = 0;
  let newArray = [];
  let newObject = {};

  const cardCollection = gameContainer.children;
  const button = document.getElementById("restart");
// TODO: Implement this function!
function handleCardClick(event) {
  // if(event.target.getAttribute("style")) return;
  // console.log(event.target);
  score++;
  if((score % 2) === 0) {
    console.log("score =", score/2);
  }
  
  event.target.setAttribute('style',`background-color: ${event.target.getAttribute('class')}`);
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);
  if(!newArray.includes(event.target.innerText) && (newArray.length < 2)) {
    newArray.push(event.target.innerText);
    if(!newObject.hasOwnProperty(event.target.getAttribute('class'))){
         if(newArray.length === 1) {
             newObject[event.target.getAttribute('class')] = 1;
         }else if(newArray.length === 2) {
             console.log('they dont match');
  
             gameContainer.classList.add('noclick');
             setTimeout(function () {
               gameContainer.classList.remove('noclick');
                for(let item of newArray) {
                cardCollection[item].removeAttribute('style');
             }},1000); 
              newObject = {};
        
             setTimeout(function () {
               newArray = [];
             },1050);
        }
    }else {
      console.log('they match!');
      for(let item of newArray) {
        cardCollection[item].removeEventListener('click',handleCardClick,false);
      }    
      counter++;
      newArray = []; 
    }
    if(counter === cardCollection.length/2) {
        console.log('you win!');
    }
  }
}

const restart = document.getElementById("restart");
restart.addEventListener('click',function(){

          score = 0;
          counter = 0;
          newArray = [];
          newObject = {};
          handleCardClick;
        
          let newShuffled = shuffle(COLORS);
          createDivsForColors(newShuffled);
          
})

// setTimeout(handleCardClick,1000);




// when the DOM loads
createDivsForColors(shuffledColors);

// let matchCount = 0;
//      gameContainer.addEventListener('click',function(e) {
//       // console.log("you just clicked", e.target);
//     })
  
      
//     
//     
    

  
        
    
    
    



