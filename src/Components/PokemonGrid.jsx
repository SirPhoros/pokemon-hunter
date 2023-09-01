import React, { useEffect, useState } from 'react'
import { addPokemonToUserCollection } from '../firebase-db-utils'
import { useUser } from '../context/UserContext'
import { getAllPokemon } from '../utils'
import PokemonSearchBar from './PokemonSearchBar'

export default function PokemonGrid() {
	const { userUID } = useUser()
	const [pokemonData, setPokemonData] = useState([])
	const [searchResults, setSearchResults] = useState([]) // State for search results
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

	return (
		<>
			<PokemonSearchBar onSearch={setSearchResults} />{' '}
			{/* Pass the setSearchResults function */}
			<article>
				{/* Display either search results or all Pokémon */}
				{searchResults.length > 0 // Use search results if available
					? searchResults.map((pokemon) => (
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
					  ))
					: // Use all Pokémon data if no search results
					  pokemonData.map((pokemon) => (
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
		</>
	)
}
