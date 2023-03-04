import app from "./firebase.js";
import { getDatabase, ref , get , child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

//initialize db
const database = getDatabase(app);
// create a reference to our db
const dbRef = ref(database);

// const testRef = ref(database, '/test:');
// console.log(testRef.value); 

console.log(database);
console.log(dbRef);

get (dbRef)
.then((data)=>{
    console.log(data.val());
});
console.log("making change for pseudo code");

// next steps for hot dog bot

// define array for questions
// stretch goal: could add a customize option to allow users to enter questions/answers to database for future use
// define: firebase path variables for answers
// define: array position as a variable

// starting preinputted message from chatbot as a li that is a child to ul



// add eventlistener to submit action button || user response
// add error handling in case of incorrect value submitted 
// if data is valid, create a variable with data.
// submit user input to database
// clear input field to an empty string || inputElement.value ="";
// initialize formElement, and liElement, ulElement as a document.querySelector

// advance to next question array number.
// if questions are done, then present all data back to user and end program
// else vvv
// add li as a child to the ul using user response as message
// preinputted message from chatbot as a new li as child to ul



// add styling for messages