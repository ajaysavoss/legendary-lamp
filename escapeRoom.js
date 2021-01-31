var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have your name? ');

var welcomeMessage = `Hello, ${playerName}, welcome to the Escape Room Game Simulation.`
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn('Enter 1 to Put hand in hole \n Enter 2 to Find the key \n Enter 3 to Open the door ' , {limit: '$<1-3>'});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log(`${playerName}, ouch, you are DEAD. Game Over.`);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        console.log(`${playerName}, you have found the key successfully!`);
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true){
        console.log(`${playerName}, you already have the key. Please proceed to option 3.`);
    }
    else if (menuOptions == 3 && hasKey == false){
        console.log(`${playerName}, you must have possession of the key first. Please find the key.`);
    }
    else if (menuOptions == 3 && hasKey == true){
        console.log(`${playerName}, you found the key, opened the door, and escaped SUCCESSFULLY!`);
        isAlive= false;
    }
}

