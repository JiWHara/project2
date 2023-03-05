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
    "What is your favourite hot dog topping?",
    "How many hot dogs do you eat in a year?",
    "What is your favourite place to get hot dogs?"
];


// define: firebase path variables for answers
const answers = ref(database, `/answers`);

// restart default database to empty on page load using set
set(answers, "");


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

// define: array position as a variable
let i = 0;

// This is to check the i number and if we're at the end of the questions, stop the loop and present the data back to user and end program
if (i < questions.length) {
    // cycle through typical message functions
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

            // add 1 to the increment variable to use when cycling to next question
            i++;
            console.log(i);
            console.log(questions.length);

        } else {
            console.log("We have an error, there is no message");
        }
    })

} else {
    // then stop program
    // return info to user
    console.log("You're DONE no more for you");
}


// else vvv
    // add li as a child to the ul using user response as message
    // preinputted message from chatbot as a new li as child to ul



// add styling for messages




                