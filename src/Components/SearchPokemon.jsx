import { useQuery, gql } from '@apollo/client'

const EXAMPLE_POKEMON = gql`
	{
		getFuzzyPokemon(pokemon: "reun", take: 10, reverse: false) {
			species
			sprite
			num
		}
	}
`

export default function SearchPokemon() {
	const { data, loading, error } = useQuery(EXAMPLE_POKEMON)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>

	return (
		<div>
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
					<br />
				</div>
			))}
		</div>
	)
}
