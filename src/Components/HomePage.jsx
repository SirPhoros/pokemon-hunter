import React, { useEffect } from 'react'
import SearchPokemon from './SearchPokemon'
import LoginRegister from './LoginRegister'

export default function HomePage({ isLoggedIn, setIsLoggedIn }) {
	useEffect(() => {}, [isLoggedIn])

	console.log(isLoggedIn, 'is Logged in?')

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
