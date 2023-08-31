import React, { useState, useEffect } from 'react'
import './App.css'
import SearchPokemon from './Components/SearchPokemon'
import LoginRegister from './Components/LoginRegister'
import { UserProvider } from './context/UserContext'

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(
	// 	localStorage.getItem('isLoggedIn') === 'true'
	// )
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	console.log(isLoggedIn, 'loggedIn status')

	useEffect(() => {
		// // Save the login state to local storage
		// localStorage.setItem('isLoggedIn', isLoggedIn)
	}, [isLoggedIn])

	return (
		<UserProvider>
			<>
				<h1>Pokemon Hunter</h1>
				{isLoggedIn ? (
					<SearchPokemon />
				) : (
					<LoginRegister setIsLoggedIn={setIsLoggedIn} />
				)}
			</>
		</UserProvider>
	)
}

export default App
