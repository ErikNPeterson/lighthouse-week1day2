var args = process.argv;
process.argv.splice(0,2);
var rollsAmount = process.argv[0];

function diceRoller(rolls){
  if (isNaN(rolls)){
    return "Sorry but " + "\"" + rollsAmount + "\"" + " is not a number. Please enter a valid number input.";
  };
  var arrayOfRolls = [];
  for (let i = 0; i < rolls; i++) {
    arrayOfRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return "Rolled dice: " + arrayOfRolls + ".";
}

console.log(diceRoller(rollsAmount));
