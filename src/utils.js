import { gql } from '@apollo/client/core'
import { client } from './client'

export async function getPokemon(input) {
	// The `variables` object will contain the user's input.
	const variables = {
		pokemon: input,
	}

	// Execute the GraphQL query with the user's input.
	const result = await client.query({
		query: gql`
			{
				getPokemon(pokemon: $pokemon) {
					sprite
					num
					species
				}
			}
		`,
		variables,
	})

	// Return the results of the query.
	return result.data.getPokemon
}
export async function getFuzzyPokemon(input) {
	// The `variables` object will contain the user's input.
	const variables = {
		pokemon: input,
	}

	// Execute the GraphQL query with the user's input.
	const result = await client.query({
		query: gql`
			{
				getFuzzyPokemon(pokemon: $pokemon) {
					sprite
					num
					species
				}
			}
		`,
		variables,
	})

	// Return the results of the query.
	return result.data.getPokemon
}
