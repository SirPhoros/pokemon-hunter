import { useUser } from '../context/UserContext'
import {
	fetchUserPokemonCollection,
	updateShinyState,
} from '../firebase-db-utils'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Collection() {
	const { userUID } = useUser()
	const [pokemonCollection, setPokemonCollection] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate() // Get the navigation function

	useEffect(() => {
		if (!userUID) {
			// If there is no userUID, navigate to the main page
			navigate('/')
		} else {
			// Fetch and listen to the user's Pokémon collection in real-time
			fetchUserPokemonCollection(userUID, setPokemonCollection)
			setLoading(false)
		}
	}, [userUID, navigate])

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
						{pokemon.isShiny ? (
							<img
								width="auto"
								height="250"
								alt="shiny pokemon sprite"
								src={pokemon.shinySprite}
							/>
						) : (
							<img
								width="auto"
								height="250"
								alt="pokemon sprite"
								src={pokemon.sprite}
							/>
						)}
						<br />
						<button onClick={() => updateShinyState(pokemon, userUID)}>
							{pokemon.isShiny ? 'Make Normal' : 'Make Shiny'}
						</button>
						<br />
						{console.log('Current Pokemon:', pokemon)}
					</div>
				))}
			</ul>
		</div>
	)
}
