// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Database Storage
import { getFirestore, doc, setDoc } from 'firebase/firestore'
//Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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

export function handleSignUpWithEmail(email, password) {
	let createUser = createUserWithEmailAndPassword(auth, email, password)
	// If there is any error, stop the process.
	createUser
		.catch(function (error) {
			let errorCode = error.code
			console.log(`GOT ERROR: ` + errorCode)
			if (errorCode === 'auth/weak-password') {
				console.error('Password is too weak. Minimum 6 characters.')
			} else if (errorCode === 'auth/email-already-in-use') {
				console.error('Email is already in use.')
			}
		})
		.then(function () {
			if (auth.currentUser) {
				let userUid = auth.currentUser.uid

				let userData = {
					email: email,
					emailVerified: false,
					name: email.split('@')[0] || '',
					password: password,
				}

				// Set user data in Firestore
				setDoc(doc(db, 'users', userUid), userData)
					.then(() => {
						console.log('User data saved successfully')
					})
					.catch((error) => {
						console.error('Error saving user data:', error)
					})
			}
		})
}
