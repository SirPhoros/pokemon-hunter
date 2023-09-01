import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import {
	fetchUserPokemonCollection,
	updateShinyState,
} from '../firebase-db-utils'
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
		<>
			<h1>Your Pokémon Collection</h1>
			<div className="pokemon-grid-container">
				<section className="pokemon-grid scrollable-container">
					{pokemonCollection.map((pokemon) => (
						<article
							className="pokemon-card"
							key={pokemon.species}
						>
							<h3 className="pokemon-name">{pokemon.species}</h3>
							<div className="divider"></div>
							{pokemon.isShiny ? (
								<img
									className="pokemon-image"
									width="auto"
									height="250"
									alt="shiny pokemon sprite"
									src={pokemon.shinySprite}
								/>
							) : (
								<img
									className="pokemon-image"
									width="auto"
									height="250"
									alt="pokemon sprite"
									src={pokemon.sprite}
								/>
							)}
							<div className="button-container">
								<button onClick={() => updateShinyState(pokemon, userUID)}>
									{pokemon.isShiny ? 'Make Normal' : 'Make Shiny'}
								</button>
							</div>
						</article>
					))}
				</section>
			</div>
		</>
	)
}
