//WATCH FOR THE CLICK OF THE BUTTON
document.querySelector(".bloody-click").addEventListener('click', getBlood);

// VARIABLE TO MAKE POSSIBLE NOT REPEATING THE BLOOD SPLASHES
let splashesUsed = [];

//FUNCTION TO CHOSE A RANDOM BLOOD SPLASH THAT HAVEN'T BEEN DISPLAYED BEFORE
function getBlood () {
    if (splashesUsed.length == 3) {
        splashesUsed.shift();
        splashesUsed.shift();
    }

    let randomNumber = Math.floor(Math.random() * 3);

    while (splashesUsed.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 3);
        }

        let chosenNumber = randomNumber;

        if (chosenNumber === 0) {
            Blood1();
        } else if (chosenNumber === 1) {
            Blood2();
        } else if (chosenNumber === 2) {
            Blood3();
        }

        splashesUsed.push(chosenNumber);
        console.log(splashesUsed);
        
    }


//GETTING THE SPLASH OF BLOOD 1
function Blood1 () {
    document.getElementById("splash-1-fade").beginElement();
    document.getElementById("splash-1a-drip").beginElement();
    document.getElementById("splash-1b-drip").beginElement();
}


//GETTING THE SPLASH OF BLOOD 2
function Blood2 () {
    document.getElementById("splash-2-fade").beginElement();
    document.getElementById("splash-2-drip").beginElement();
}

//GETTING THE SPLASH OF BLOOD 3
function Blood3 () {
    document.getElementById("splash-3-fade").beginElement();
    document.getElementById("splash-3-drip").beginElement();
}