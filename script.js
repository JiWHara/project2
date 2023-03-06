import app from "./firebase.js";
import { getDatabase, ref, set, get, onValue, push} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

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
let questionNumber = 0;

// This is to check the i number and if we're at the end of the questions, stop the loop and present the data back to user and end program
    
    // cycle through typical message functions
    // add eventlistener to submit action button || user response
    // check if question array has fully looped
    if (questionNumber < 4){
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // Store user input in a variable
            const input = document.querySelector('input');
            const msg = input.value;
            
            // Check if message exists, and if so, continue. If not, handle errors
            if (msg){
                // submit user input to database
                const firebaseObj = push(answers, msg); 
                    // create a new li element for user input
                    const answerItemElement = document.createElement('li');
                    // affix user msg to newly created element to be displayed
                    answerItemElement.textContent = msg;
                    // append the li element to the ul element for user input
                    ul.appendChild(answerItemElement);
                    // create li element for each element needed
                    const questionItemElement = document.createElement('li');
                    const summaryItemElement = document.createElement('li');
                    const arrayItemElement = document.createElement('li');
                console.log(questions[questionNumber]);
                // check to see if array has ended
                if (questionNumber === 4) {
                    // add final info summary back to user here
                    console.log("Congratulations, you finished my quiz! Let me show you your answers:");
                    summaryItemElement.textContent = "Congratulations, you finished my quiz! Let me show you your answers:";
                    ul.appendChild(summaryItemElement);
                    arrayItemElement.textContent = answers.val();
                    ul.appendChild(arrayItemElement);
                } else 
                
                
                questionItemElement.textContent = questions[questionNumber];
                ul.appendChild(questionItemElement);
                // add 1 to the increment variable to use when cycling to next question
                questionNumber++;
                 console.log(questionNumber);
                 
                // console.log(questions.length);
                
                // add user input from database into li appended to the ul 
                // add question to ul using question[i]
    
            } else {
                console.log("We have an error, there is no message");
            }
            // clear input field to an empty string
            input.value = "";
    
        });
    } else {
            form.removeEventListener('submit');  
    }

// else vvv
    // add li as a child to the ul using user response as message
    // preinputted message from chatbot as a new li as child to ul


// add styling for messages




                