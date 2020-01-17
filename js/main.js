// ******************************************************
// ********************* VARIABLES **********************
// ******************************************************




// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************




// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************




// Step 1. Style die
// Step 2. Write the rolled statement
// Step 3. Randomize the dice
// Step 4. Make the button randomize the dice # 
// Step 5. Get the randomized number in the rolled statement from button click

// Step 6. Get dice img to change w/ randomized number
    // print the randomized number inside the img src --> match random numbers 1-6 to svgs 1-6


////////////////// OG WAY/////////////////////////
// function printResult () {
//     //randomizes the number
//     let randomSide = Math.ceil(Math.random() * 6);
//     console.log(`${randomSide}`)

//     // grabs the place where the result is going to go
//     let rollResult = document.querySelector('#result')

//     // prints the random number to the result line
//     rollResult.innerHTML = (`${randomSide}`);
// }
// document.getElementbyId(`rollBtn`).addEventListener(`click`, printResult);



// assigning button
let rollButton = document.querySelector('#rollBtn')

/////////////////NEW WAY//////////////////////
rollButton.addEventListener('click', (event) => {  
   
    //randomizes the number, rounds up, six integers
    let randomSide = Math.ceil(Math.random() * 6); 
    // console.log(`${randomSide}`)

    // grabs where the result is going to go
    let rollResult = document.querySelector('#result')

    // prints the random number to the result line
    rollResult.innerHTML = (`${randomSide}`);

    // prints the random number to the img src to select image
    // this could be a variable 
    document.querySelector(`#side`).setAttribute(`src`, `img/dice${randomSide}.svg`)
})




// let dice1 = document.querySelector('#side').setAttribute('src', 'img/dice1.svg')
// let dice2 = document.querySelector('#side').setAttribute('src', 'img/dice2.svg')
// let dice3 = document.querySelector('#side').setAttribute('src', 'img/dice3.svg')
// let dice4 = document.querySelector('#side').setAttribute('src', 'img/dice4.svg')
// let dice5 = document.querySelector('#side').setAttribute('src', 'img/dice5.svg')
// let dice6 = document.querySelector('#side').setAttribute('src', 'img/dice6.svg')
