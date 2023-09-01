import React, { useEffect } from 'react'
import LoginRegister from './LoginRegister'
import PokemonGrid from './PokemonGrid'

export default function HomePage({ isLoggedIn, setIsLoggedIn }) {
	useEffect(() => {}, [isLoggedIn])

	console.log(isLoggedIn, 'is Logged in?')

	return (
		<>
			<h1>Pokemon Hunter</h1>
			{isLoggedIn ? (
				<PokemonGrid />
			) : (
				<LoginRegister setIsLoggedIn={setIsLoggedIn} />
			)}
		</>
	)
}
