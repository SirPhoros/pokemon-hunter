import React, { useEffect } from 'react'
import LoginRegister from './LoginRegister'
import PokemonGrid from './PokemonGrid'
import { useUser } from '../context/UserContext'

export default function HomePage() {
	const { isLoggedIn } = useUser();
	useEffect(() => {}, [isLoggedIn])

	return (
		<>
			<h1>Pokemon Hunter</h1>
			{isLoggedIn ? (
				<PokemonGrid />
			) : (
				<LoginRegister />
			)}
		</>
	)
}
