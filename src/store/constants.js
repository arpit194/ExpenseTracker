let prod = 0;

let env;
let dbURL;
let API_KEY;

if (prod) {
  env = "test";
  dbURL = "firebase realtime db url for test";
  API_KEY = "firebase api key for test ";
} else {
  env = "prod";
  dbURL = "firebase db url for prod";
  API_KEY = "firebase api key for prod";
}

export { env, dbURL, API_KEY };
