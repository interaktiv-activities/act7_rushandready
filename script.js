// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    document.getElementById("end-screen").style.display = "flex"
}
// END HERE

/* Changes the display of the image and starts the game */
function startGame() {
    hideStartScreen()
}

let outputImage1 = document.getElementById("output1")
let outputImage2 = document.getElementById("output2")
let outputImage3 = document.getElementById("output3")
let outputImage4 = document.getElementById("output4")
let outputImage5 = document.getElementById("output5")
let outputImage6 = document.getElementById("output6")
let outputImage7 = document.getElementById("output7")
let outputImage8 = document.getElementById("output8")
let outputImage9 = document.getElementById("output9")

let imageValue1 = false
let imageValue2 = false
let imageValue3 = false
let imageValue4 = false
let imageValue5 = false
let imageValue6 = false
let imageValue7 = false
let imageValue8 = false
let imageValue9 = false

function selectChoice1() {
    if (imageValue1 == false){
        outputImage1.setAttribute("src", "ASSETS/ITEMS/battery-selected.png")
        imageValue1 = true
    } else if (imageValue1 == true){
        outputImage1.setAttribute("src", "ASSETS/ITEMS/battery-default.png")
        imageValue1 = false
    }
}

function selectChoice2() {
    if (imageValue2 == false){
        outputImage2.setAttribute("src", "ASSETS/ITEMS/ball-selected.png")
        imageValue2 = true
    } else if (imageValue2 == true){
        outputImage2.setAttribute("src", "ASSETS/ITEMS/ball-default.png")
        imageValue2 = false
    }
}

function selectChoice3() {
    if (imageValue3 == false){
        outputImage3.setAttribute("src", "ASSETS/ITEMS/flashlight-selected.png")
        imageValue3 = true
    } else if (imageValue3 == true){
        outputImage3.setAttribute("src", "ASSETS/ITEMS/flashlight-default.png")
        imageValue3 = false
    }
}

function selectChoice4() {
    if (imageValue4 == false){
        outputImage4.setAttribute("src", "ASSETS/ITEMS/hat-selected.png")
        imageValue4 = true
    } else if (imageValue4 == true){
        outputImage4.setAttribute("src", "ASSETS/ITEMS/hat-default.png")
        imageValue4 = false
    }
}

function selectChoice5() {
    if (imageValue5 == false){
        outputImage5.setAttribute("src", "ASSETS/ITEMS/medkit-selected.png")
        imageValue5 = true
    } else if (imageValue5 == true){
        outputImage5.setAttribute("src", "ASSETS/ITEMS/medkit-default.png")
        imageValue5 = false
    }
}

function selectChoice6() {
    if (imageValue6 == false){
        outputImage6.setAttribute("src", "ASSETS/ITEMS/water-selected.png")
        imageValue6 = true
    } else if (imageValue6 == true){
        outputImage6.setAttribute("src", "ASSETS/ITEMS/water-default.png")
        imageValue6 = false
    }
}

function selectChoice7() {
    if (imageValue7 == false){
        outputImage7.setAttribute("src", "ASSETS/ITEMS/whistle-selected.png")
        imageValue7 = true
    } else if (imageValue7 == true){
        outputImage7.setAttribute("src", "ASSETS/ITEMS/whistle-default.png")
        imageValue7 = false
    }
}

function selectChoice8() {
    if (imageValue8 == false){
        outputImage8.setAttribute("src", "ASSETS/ITEMS/shirt-selected.png")
        imageValue8 = true
    } else if (imageValue8 == true){
        outputImage8.setAttribute("src", "ASSETS/ITEMS/shirt-default.png")
        imageValue8 = false
    }
}

function selectChoice9() {
    if (imageValue9 == false){
        outputImage9.setAttribute("src", "ASSETS/ITEMS/plant-selected.png")
        imageValue9 = true
    } else if (imageValue9 == true){
        outputImage9.setAttribute("src", "ASSETS/ITEMS/plant-default.png")
        imageValue9 = false
    }
}



/* Checks whether all of the images return true (inclusive) or false (non-inclusive)*/
function submitAnswer() {
    if (imageValue1 == true && imageValue2 == false && imageValue3 == true && imageValue4 == false && imageValue5 == true &&
        imageValue6 == true && imageValue7 == true && imageValue8 == true && imageValue9 == false){
            endGame()
    } else {
        alert("PLEASE TRY AGAIN! You have selected an image that is NOT part of an emergency kit.")
    }
}

document.getElementById("output1").addEventListener("click", selectChoice1)
document.getElementById("output2").addEventListener("click", selectChoice2)
document.getElementById("output3").addEventListener("click", selectChoice3)
document.getElementById("output4").addEventListener("click", selectChoice4)
document.getElementById("output5").addEventListener("click", selectChoice5)
document.getElementById("output6").addEventListener("click", selectChoice6)
document.getElementById("output7").addEventListener("click", selectChoice7)
document.getElementById("output8").addEventListener("click", selectChoice8)
document.getElementById("output9").addEventListener("click", selectChoice9)

