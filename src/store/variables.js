let prod = 0;

let env;
let dbURL;
let API_KEY;

if (!prod) {
  env = "test";
  dbURL =
    "https://react-practice-e960e-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/";
  API_KEY = "AIzaSyAUY6i5tSEeqHMKml2XNOUsGNiWK8E0wTU";
} else {
  env = "prod";
  dbURL = "https://expensetracker-9695c-default-rtdb.firebaseio.com/expenses";
  API_KEY = "AIzaSyBXD9k7JNNqa5SrzWdN7kN6up0FVpKlfdw";
}

export { env, dbURL, API_KEY };
