// Declaring and assigning in one step

var playerName = "Kandra";
var locationName = "The Dungeon of Doom";

console.log(playerName + " is in " + locationName);



/* Further Adventures
 *
 * 1) Declare a health variable and assign it
 *    a value in one step.
 *
 * 2) Declare a message variable.
 *
 * 3) Assign message a value created by joining
 *    variables and text to say something like
 *    "Kandra has health 50 and is in The Dungeon of Doom"
 *
 * 4) Replace the current console.log statement
 *    with a new one to display the message variable.
 *
 */

var health = 45; // Declared and assigned a value to 'health'

var message = playerName + " has health " + health + " and is in " + locationName;
// Create a message by combining 'playerName', 'health', and 'locationName'

console.log(message); // Output: Kandra has health 45 and is in The Dungeon of Doom