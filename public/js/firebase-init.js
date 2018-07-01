var config = {
    apiKey: "AIzaSyC4gZM-WWF2rhoJoNGmVcZgUp0G7Ij1D8M",
    authDomain: "olx-web.firebaseapp.com",
    databaseURL: "https://olx-web.firebaseio.com",
    projectId: "olx-web",
    storageBucket: "olx-web.appspot.com",
    messagingSenderId: "902898603134"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

function emptyField(){
  errMessage.innerText = ""
}
