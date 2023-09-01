import React, { useState } from 'react'
import { getFuzzyPokemon } from '../utils'

export default function PokemonSearchBar({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = () => {
		getFuzzyPokemon(searchQuery)
			.then((pokemonData) => {
				onSearch(pokemonData)
			})
			.catch((error) => {
				console.error('Error searching for Pokémon:', error)
			})
	}

	return (
		<section>
			<input
				type="text"
				placeholder="Search for a Pokémon"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
		</section>
	)
}
