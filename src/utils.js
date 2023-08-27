import { gql } from '@apollo/client/core'
import { client } from './client'

export function getFuzzyPokemon(input) {
	const variables = {
		pokemon: input,
	}

	return client
		.query({
			query: gql`
				query GetFuzzyPokemon($pokemon: String!) {
					getFuzzyPokemon(pokemon: $pokemon) {
						sprite
						num
						species
					}
				}
			`,
			variables,
		})
		.then((result) => {
			// Handle the result of the query here.
			const pokemonData = result.data.getFuzzyPokemon
			return pokemonData
		})
		.catch((error) => {
			// Handle any errors that occurred during the query.

			throw error // Rethrow the error if needed.
		})
}
