import app from "./firebase.js";
import { getDatabase, ref, set, get, onValue, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

//initialize db
const database = getDatabase(app);
// create a reference to our db
const dbRef = ref(database);


// next steps for hot dog bot

// define array for questions (stretch goal: could add a customize option to allow users to enter questions/answers to database for future use)
const questions = [
    "It's nice to meet you! Tell me, do you like hot dogs?",
    "Here is question 3",
    "Question 4 - remember 1 was already on screen",
    "Final question (q5) before we show you the results!"
];


// define: firebase path variables for answers
const answers = ref(database, `/answers`);

// restart default database to empty on page load using set
set(answers, "");

// define: array position as a variable
let i = 0;

// Create a function for pushing user inputs to database, to be called later
const addToList = function (userResponse){
    return push(answers, userResponse);
};

// starting preinputted message from chatbot as a li that is a child to ul
// Added this to the HTML!

// create some variables for DOM elements
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const submit = document.querySelector('button');

// add eventlistener to submit action button || user response

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Store user input in a variable
    const input = document.querySelector('input');
    const msg = input.value;

    // Check if message exists, and if so, continue. If not, handle errors
    if (msg){
        console.log(msg);

        // submit user input to database
        addToList(msg);

        // clear input field to an empty string
        input.value = "";

    } else {
        console.log("We have an error, there is no message");
    }
})


// advance to next question array number.
// if questions are done, then present all data back to user and end program
// else vvv
// add li as a child to the ul using user response as message
// preinputted message from chatbot as a new li as child to ul



// add styling for messages




                