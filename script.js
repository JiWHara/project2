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

