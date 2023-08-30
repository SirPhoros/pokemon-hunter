// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Database Storage
import { getFirestore } from 'firebase/firestore'
//Firebase Auth
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBbhBbyh48g-ElQP9bVvWPDErOXRoId70I',
	authDomain: 'pokemon-hunter-cc4b0.firebaseapp.com',
	projectId: 'pokemon-hunter-cc4b0',
	storageBucket: 'pokemon-hunter-cc4b0.appspot.com',
	messagingSenderId: '150000503332',
	appId: '1:150000503332:web:058b918744d3f03e4fe6b1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//Initialise Services
const db = getFirestore(app)
const auth = getAuth(app)
