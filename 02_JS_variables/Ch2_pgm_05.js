// Assigning text to variables

var message;

message = "Hello World!";
console.log(message);

message = 'Congratulations! Your tweet has won a prize...';
console.log(message);



/* Further Adventures
 *
 * 1) Assign message a third value. Display it on the console.
 *
 * Pieces of text can be joined together using the + symbol.
 * e.g. "Hello " + "World!"
 *
 * 2) Split the first message into two pieces,
 *    joined by + and run the program.
 *
 * 3) Split the second message into three pieces,
 *    joined by + and run the program.
 *    Be careful to use matching speech marks.
 *
 */

message = "Welcome to JavaScript Programming"; // Assigning a third value to 'message'
console.log(message); // Output: Welcome to JavaScript Programming

message = "Hello " + "World!"; // Splitting the first message into two pieces
console.log(message); // Output: Hello World!

message = "Congratulations! " + "Your tweet has " + "won a prize..."; // Splitting the second message into three pieces
console.log(message); // Output: Congratulations! Your tweet has won a prize...