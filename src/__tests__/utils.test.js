import { getFuzzyPokemon } from '../utils'

describe('getFuzzyPokemon', () => {
	test('Pikachu', () => {
		return getFuzzyPokemon('pikachu').then((pokemon) => {
			expect(pokemon).toEqual([
				{
					__typename: 'Pokemon',
					num: 25,
					species: 'pikachu',
					sprite: 'https://play.pokemonshowdown.com/sprites/ani/pikachu.gif',
				},
			])
		})
	})

	test('Charizard', () => {
		return getFuzzyPokemon('charizard').then((pokemon) => {
			expect(pokemon).toEqual([
				{
					__typename: 'Pokemon',
					num: 6,
					species: 'charizard',
					sprite: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif',
				},
			])
		})
	})

	test('MissingNo', () => {
		return getFuzzyPokemon('missingno').then((pokemon) => {
			expect(pokemon).toEqual([
				{
					__typename: 'Pokemon',
					num: 0,
					species: 'missingno.',
					sprite: 'https://play.pokemonshowdown.com/sprites/afd/missingno.png',
				},
			])
		})
	})

	test('Invalid Input (Non-String)', () => {
		// Pass an invalid input (a number) to the function
		const invalidInput = 123
		return getFuzzyPokemon(invalidInput)
			.then((response) => {
				// If the Promise resolves, this test should fail.
				// If an error is thrown, the test will pass.
				throw new Error('Expected an error but got a response')
			})
			.catch((error) => {
				expect(error).toBeInstanceOf(Error)
				expect(error.message).toContain(
					'Response not successful: Received status code 400'
				)
			})
	})
})
