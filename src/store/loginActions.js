import { loginActions } from "./loginSlice";
import { uiActions } from "./uiSlice";

const API_KEY = "AIzaSyAUY6i5tSEeqHMKml2XNOUsGNiWK8E0wTU"; // For testing

export const signUp = (name, email, password) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
    }

    const userData = await response.json();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: userData.idToken,
          displayName: name,
          photoUrl: null,
          deleteAttribute: null,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(uiActions.setIsLoading(false));
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
    }
    const userData = await response.json();

    dispatch(loginActions.setToken(userData.idToken));
    dispatch(loginActions.setUserId(userData.localId));
    localStorage.setItem("token", userData.idToken);
    localStorage.setItem("userId", userData.localId);

    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: userData.idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    dispatch(uiActions.setDisplayName(data.users[0].displayName));
    localStorage.setItem("displayName", data.users[0].displayName);
    dispatch(uiActions.setIsLoading(false));
  };
};
