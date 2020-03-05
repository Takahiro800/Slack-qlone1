
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.apps.length){
  const config = {
    apiKey: "AIzaSyDj7Hb6fGS6LmFw9zcaItpDf4cn7g2fk74",
    authDomain: "slack-clone-app-8009b.firebaseapp.com",
    databaseURL: "https://slack-clone-app-8009b.firebaseio.com",
    projectId: "slack-clone-app-8009b",
    storageBucket: "slack-clone-app-8009b.appspot.com",
    messagingSenderId: "453445288182"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}