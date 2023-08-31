import React, { useState, useEffect } from 'react'
import './App.css'
import SearchPokemon from './Components/SearchPokemon'
import LoginRegister from './Components/LoginRegister'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('isLoggedIn') === 'true'
	)
	console.log(isLoggedIn, 'loggedIn status')
	useEffect(() => {
		// Save the login state to local storage
		localStorage.setItem('isLoggedIn', isLoggedIn)
	}, [isLoggedIn])

	return (
		<>
			<h1>Pokemon Hunter</h1>
			{isLoggedIn ? (
				<SearchPokemon />
			) : (
				<LoginRegister setIsLoggedIn={setIsLoggedIn} />
			)}
		</>
	)
}

export default App
