import { useUser } from '../context/UserContext'
import {
	fetchUserPokemonCollection,
	updateShinyState,
} from '../firebase-db-utils'
import { useEffect, useState } from 'react'

export default function Collection() {
	const { userUID } = useUser()
	const [pokemonCollection, setPokemonCollection] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Fetch the user's Pokémon collection
		fetchUserPokemonCollection(userUID)
			.then((collection) => {
				setPokemonCollection(collection)
				setLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching Pokémon collection:', error)
				setLoading(false)
			})
	}, [userUID])

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<div>
			<h2>Your Pokémon Collection</h2>
			<ul>
				{pokemonCollection.map((pokemon) => (
					<div key={pokemon.species}>
						<h3>{pokemon.species}</h3>
						<img
							width="auto"
							height="250"
							alt="pokemon sprite"
							src={pokemon.sprite}
						/>
						<br />
						<button onClick={() => updateShinyState(pokemon)}>Shiny?</button>
						<br />
					</div>
				))}
			</ul>
		</div>
	)
}
