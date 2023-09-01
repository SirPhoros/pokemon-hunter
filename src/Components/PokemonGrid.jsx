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
		<div className="pokemon-grid-container">
			<PokemonSearchBar onSearch={setSearchResults} />
			<section className="pokemon-grid scrollable-container">
				{searchResults.length > 0
					? // Use search results if available
					  searchResults.map((pokemon) => (
							<article
								className="pokemon-card"
								key={pokemon.species}
							>
								<h3 className="pokemon-name">{pokemon.species}</h3>
								<div className="divider"></div>
								<img
									className="pokemon-image"
									alt="pokemon sprite"
									src={pokemon.sprite}
								/>
								<div className="button-container">
									<button
										className="add-to-collection-button"
										onClick={() => handleAddPokemonToCollection(pokemon)}
									>
										Add to collection
									</button>
								</div>
							</article>
					  ))
					: // Use all Pokémon data if no search results
					  pokemonData.map((pokemon) => (
							<article
								className="pokemon-card"
								key={pokemon.species}
							>
								<h3 className="pokemon-name">{pokemon.species}</h3>
								<div className="divider"></div>
								<img
									className="pokemon-image"
									alt="pokemon sprite"
									src={pokemon.sprite}
								/>
								<div className="button-container">
									<button onClick={() => handleAddPokemonToCollection(pokemon)}>
										Add to collection
									</button>
								</div>
							</article>
					  ))}
			</section>
		</div>
	)
}
