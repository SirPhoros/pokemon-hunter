import { useQuery, gql } from '@apollo/client'

const EXAMPLE_POKEMON = gql`
	{
		getPokemon(pokemon: dragonite) {
			sprite
			num
			species
		}
	}
`
export default function SearchPokemon() {
	const { loading, error, data } = useQuery(EXAMPLE_POKEMON)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error : {error.message}</p>
	const { sprite, species, num } = data.getPokemon

	return (
		<>
			{' '}
			<h3>{species}</h3>
			<img
				width="400"
				height="250"
				alt="pokemon sprite"
				src={`${sprite}`}
			/>
			<br />
			<br />
		</>
	)
}
