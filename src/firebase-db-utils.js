// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Database Storage
import {
	getFirestore,
	doc,
	setDoc,
	updateDoc,
	getDoc,
	getDocs,
	collection,
	onSnapshot,
} from 'firebase/firestore'
//Firebase Auth
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBbhBbyh48g-ElQP9bVvWPDErOXRoId70I',
	authDomain: 'pokemon-hunter-cc4b0.firebaseapp.com',
	projectId: 'pokemon-hunter-cc4b0',
	storageBucket: 'pokemon-hunter-cc4b0.appspot.com',
	messagingSenderId: '150000503332',
	appId: '1:150000503332:web:058b918744d3f03e4fe6b1',
}

//INITIALISE FIREBASE
const app = initializeApp(firebaseConfig)

//INITIALISE SERVICES
const db = getFirestore(app)
const auth = getAuth(app)

//AUTH FUNCTIONS - FIREBASE
export function handleSignUpWithEmail(email, password) {
	return createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			const userUid = user.uid
			const userData = {
				email: email,
				emailVerified: false,
				name: email.split('@')[0] || '',
				password: password,
			}

			return setDoc(doc(db, 'Users', userUid), userData)
				.then(() => {
					console.log('User data saved successfully')
					return user // Return the user information
				})
				.catch((error) => {
					console.error('Error saving user data:', error)
					throw error // Rethrow the error to be caught by the caller
				})
		})
		.catch((error) => {
			let errorCode = error.code
			console.log(`GOT ERROR: ` + errorCode)
			if (errorCode === 'auth/weak-password') {
				console.error('Password is too weak. Minimum 6 characters.')
			} else if (errorCode === 'auth/email-already-in-use') {
				console.error('Email is already in use.')
			}
			throw error // Rethrow the error to be caught by the caller
		})
}

export function logIn(email, password) {
	return signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user
			console.log('user signed in')
			return user // Return the user information
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log(`GOT ERROR: ` + errorCode)
			console.log(errorMessage)
			throw error // Rethrow the error to be caught by the caller
		})
}

export function logOut() {
	signOut(auth)
		.then(() => {
			console.log('user signed out')
		})
		.catch((error) => {
			console.error('Error logging out:', error)
		})
}

//DATABASE FUNCTIONS - FIREBASE
export function addPokemonToUserCollection(pokemon, userUid) {
	console.log(userUid, 'userUid')
	const { species } = pokemon

	const pokemonData = { ...pokemon, isShiny: false }
	console.log(pokemonData)

	const userPokemonDocRef = doc(db, 'Users', userUid, 'Pokemon', species)

	// Set the Pokémon data in the user's Pokémon document
	setDoc(userPokemonDocRef, pokemonData)
		.then(() => {
			console.log(
				`Added ${species} to ${userUid}'s Pokémon collection successfully`
			)
		})
		.catch((error) => {
			console.error(
				`Error adding ${species} to ${userUid}'s Pokémon collection:`,
				error
			)
		})
}

export function updateShinyState(pokemonData, userUid) {
	const { species } = pokemonData
	console.log(pokemonData)
	// Reference to the user's Pokémon document
	const userPokemonDocRef = doc(db, 'Users', userUid, 'Pokemon', species)

	// Check if the document already exists
	getDoc(userPokemonDocRef)
		.then((docSnapshot) => {
			if (docSnapshot.exists()) {
				// Get the current data from the document
				const currentData = docSnapshot.data()

				const updatedData = {
					...currentData,
					isShiny: !currentData.isShiny, // Toggle the boolean value
				}

				// Update the document with the new data
				updateDoc(userPokemonDocRef, updatedData)
					.then(() => {
						console.log(
							`Toggled boolean value for ${species} in ${userUid}'s Pokémon collection successfully`
						)
					})
					.catch((error) => {
						console.error(
							`Error toggling boolean value for ${species} in ${userUid}'s Pokémon collection:`,
							error
						)
					})
			} else {
				console.error(
					`${species} does not exist in ${userUid}'s Pokémon collection.`
				)
			}
		})
		.catch((error) => {
			console.error(
				`Error checking if ${species} exists in ${userUid}'s Pokémon collection:`,
				error
			)
		})
}

export function fetchUserPokemonCollection(
	userUid,
	setPokemonCollection
) {
	const userPokemonCollectionRef = collection(db, 'Users', userUid, 'Pokemon')

	// Attach a real-time listener to the collection
	onSnapshot(userPokemonCollectionRef, (querySnapshot) => {
		const updatedCollection = []
		querySnapshot.forEach((doc) => {
			updatedCollection.push(doc.data())
		})
		setPokemonCollection(updatedCollection)
	})
}
