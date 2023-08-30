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
export function getAllPokemon(take = 10) {
	const variables = {
		take,
	}

	return client
		.query({
			query: gql`
				query GetAllPokemon($take: Int) {
					getAllPokemon(take: $take, offset: 89) {
						sprite
						shinySprite
						num
						species
						types {
							name
						}
					}
				}
			`,
			variables,
		})
		.then((result) => {
			// Handle the result of the query here.
			const pokemonData = result.data.getAllPokemon
			return pokemonData
		})
		.catch((error) => {
			// Handle any errors that occurred during the query.

			throw error // Rethrow the error if needed.
		})
}
