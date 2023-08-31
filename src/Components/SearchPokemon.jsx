import { useQuery, gql } from '@apollo/client'
import { addPokemonToUserCollection } from '../firebase-db-utils'
import { useUser } from '../context/UserContext'

const EXAMPLE_POKEMON = gql`
	{
		getFuzzyPokemon(pokemon: "reun", take: 10, reverse: false) {
			sprite
			shinySprite
			num
			species
			types {
				name
			}
		}
	}
`

export default function SearchPokemon() {
	const { userUID } = useUser()
	const { data, loading, error } = useQuery(EXAMPLE_POKEMON)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>

	function handleAddPokemonToCollection(pokemonData) {
		addPokemonToUserCollection(pokemonData)
	}

	return (
		<article>
			{data.getFuzzyPokemon.map((pokemon) => (
				<div key={pokemon.num}>
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
