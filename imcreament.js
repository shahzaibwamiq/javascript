// Create Variable
let countt=0
console.log(countt)
// Print variable in inner HTML
document.getElementById('countt').innerHTML=countt



// 1. Create two variables, myAge and humanDogRatio
let myage=21
let humanDogRatio=3
// 2. Multiply the two together and store the result in myDogAge 
let myDogAge=myage*humanDogRatio
// 3. Log myDogAge to the console
console.log(myDogAge)



// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)



let messageToUser="We have Logged"
console.log(messageToUser)



// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console


let name	= "admin"
let greeting = "Hi, my name is "

let grettingMessage=greeting + name
console.log(grettingMessage)




// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText


let welcomeEl =document.getElementById('welcome-el')
welcomeEl.innerText=greeting+name


// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeEl.innerText+=" 👋"


let countdis =0

function increment(){
	countdis+=1
	document.getElementById('count').innerHTML=countdis
}




// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let newcount=count	+ " - "
    saveEl.textContent+=newcount
    countEl.innerText=0
    count=0

    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


