var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// Game states
//"Win" - player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//     * Defeat each enemy-robots
//"Lose" - Player robot's health is zero or less

//You can also log multiple values at once like this console.log(playerName, playerAttach, playerHealth);


var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // fight function statements

  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.");

  // if player choses to fight, then fight
  if (promptFight === "FIGHT" || promptFight === "fight") {

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confimSkip = window.confirm("Are you sure you'd like to quit?");
      
      // if yes (true), leave fight
      if (confimSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          //subtract money from playerMoney for skiping
          playerMoney = playerMoney - 2;
      }
      //if no (falso), ask question again by running fight() again
      else { 
          fight();
      }
      //if player did not choose 1 or 2 in prompt
  
  } else {
  window.alert("You need to choose a valid option. Try again!");
  }
  };

console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}

// function to start a new game
var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
      fight(enemyNames)
    }
    //After the loop ends, player is out of health or enemies to fight, so run the endGame function
    endGame();
};
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //other logic remains the same
    // function to end the entire game

    var endGame = function() {
      //if player is still al ive, player  wins!
      if (playerHealth > 0) {
          window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      }
      else {
          window.alert("You've lost your robot in battle.");
      }
      // Ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");
      if (playAgainConfirm) {
          //restart game
          startGame();
      }
      else {
          window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));
        
        var pickedEnemyName = enemyNames[i];
        
        enemyHealth = 50;

        fight(pickedEnemyName);
    }
    // play game
    startGame();
};
   


// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// start the game when the page loads
startGame();

