// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
 let lastRoll=0
 var str=" again!"
 const rollTheDice=function () {
 let diceRoll1=getRandomDiceRoll();
 let diceRoll2=getRandomDiceRoll();
 let sum =diceRoll1+diceRoll2

  if (sum!== lastRoll)
  {
    document.querySelector("#number").textContent=` ${sum}`
  }
  else 
   {
     console.log(sum+str)
     document.querySelector("#number").textContent=(sum+str);
    }
   lastRoll=sum
   if (sum ===2){document.querySelector(".message").textContent="You rolled : Snake Eyes"}
   else if (sum ===3)   {document.querySelector(".message").textContent="You rolled : Ace Deuce"} 
   else if (sum ===5)   {document.querySelector(".message").textContent="You rolled : Five (Fever Five)"} 
   else if (sum ===7)   {document.querySelector(".message").textContent="You rolled : Natural/Seven Out"} 
   else if (sum ===9)   {document.querySelector(".message").textContent="You rolled : Nine (Nina)"} 
   else if (sum ===11)  {document.querySelector(".message").textContent="You rolled : Yo (Yo-leven)"} 
   else if (sum ===12)  {document.querySelector(".message").textContent="You rolled : Boxcars/Midnight"} 
   //sum==4
   else if (sum ===4 && ((diceRoll1 ===3 && diceRoll2 ===1) || (diceRoll1 ===1 && diceRoll2 ===3)))  {document.querySelector(".message").textContent="You rolled : Easy Four"}
   else if (sum ===4 && (diceRoll1 ===2 && diceRoll2 ===2))  {document.querySelector(".message").textContent="You rolled : Hard Four"} 
   //sum==6
   else if (sum ===6 && ((diceRoll1 ===2 && diceRoll2 ===4) || (diceRoll1 ===4 && diceRoll2 ===2))) {document.querySelector(".message").textContent="You rolled : Easy Six"}
   else if (sum ===6 && ((diceRoll1 ===1 && diceRoll2 ===5) || (diceRoll1 ===5 && diceRoll2 ===1))) {document.querySelector(".message").textContent="You rolled : Easy Six"}
   else if (sum ===6 && (diceRoll1 ===3 && diceRoll2 ===3))  {document.querySelector(".message").textContent="You rolled : Hard Six"} 
   //sum==8
   else if (sum ===8 && ((diceRoll1 ===6 && diceRoll2 ===2) || (diceRoll1 ===2 && diceRoll2 ===6)))  {document.querySelector(".message").textContent="You rolled : Easy Eight"}
   else if (sum ===8 && ((diceRoll1 ===3 && diceRoll2 ===5) || (diceRoll1 ===5 && diceRoll2 ===3)))  {document.querySelector(".message").textContent="You rolled : Easy Eight"}
   else if (sum ===8 && (diceRoll1 ===4 && diceRoll2 ===4))  {document.querySelector(".message").textContent="You rolled : Hard Eight"}
   //sum==10
   else if (sum ===10 && ((diceRoll1 ===4 && diceRoll2 ===6) || (diceRoll1 ===6 && diceRoll2 ===4))) {document.querySelector(".message").textContent="You rolled : Easy Ten"}
   else if (sum ===10 && (diceRoll1 ===5 && diceRoll2 ===5))  {document.querySelector(".message").textContent="You rolled : Hard Ten"} 

   document.querySelector(".one").setAttribute("src",`./img/dice${diceRoll1}.svg`)    
   document.querySelector(".two").setAttribute("src",`./img/dice${diceRoll2}.svg`)    
   return sum
}

document.querySelector("#btn").addEventListener(`click`,rollTheDice)
