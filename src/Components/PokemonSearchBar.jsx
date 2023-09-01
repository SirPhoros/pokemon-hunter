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
		<section style={{ display: 'flex', alignItems: 'center' }}>
			<input
				type="text"
				placeholder="Search for a Pokémon"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				style={{ flex: 1, marginRight: '10px', padding: '5px' }}
			/>
			<button
				onClick={handleSearch}
				style={{ padding: '5px' }}
			>
				Search
			</button>
		</section>
	)
}
