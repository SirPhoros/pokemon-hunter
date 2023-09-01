import React, { useEffect, useState } from 'react'
import { addPokemonToUserCollection } from '../firebase-db-utils'
import { useUser } from '../context/UserContext'
import { getAllPokemon } from '../utils'

export default function SearchPokemon() {
	const { userUID } = useUser()
	const [pokemonData, setPokemonData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		// Fetch the Pokémon data using your getAllPokemon function
		getAllPokemon(20)
			.then((data) => {
				setPokemonData(data)
				setLoading(false)
			})
			.catch((error) => {
				setError(error)
				setLoading(false)
			})
	}, [])

	function handleAddPokemonToCollection(pokemon) {
		addPokemonToUserCollection(pokemon, userUID)
	}

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>
	console.log(pokemonData)

	return (
		<article>
			{pokemonData.map((pokemon) => (
				<div key={pokemon.species}>
					<h3>{pokemon.species}</h3>
					<img
						width="auto"
						height="250"
						alt="pokemon sprite"
						src={pokemon.sprite}
					/>
					<br />
					<button onClick={() => handleAddPokemonToCollection(pokemon)}>
						Add to collection
					</button>
					<br />
				</div>
			))}
		</article>
	)
}
