import React, { useState, useEffect } from 'react'

import SearchPokemon from './SearchPokemon'
import LoginRegister from './LoginRegister'

export default function HomePage() {
	// const [isLoggedIn, setIsLoggedIn] = useState(
	// 	localStorage.getItem('isLoggedIn') === 'true'
	// )
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		// // Save the login state to local storage
		// localStorage.setItem('isLoggedIn', isLoggedIn)
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
