import { getAllPokemon, getFuzzyPokemon } from '../utils'

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
		return getFuzzyPokemon(invalidInput).catch((error) => {
			expect(error).toBeInstanceOf(Error)
			expect(error.message).toContain(
				'Response not successful: Received status code 400'
			)
		})
	})
})

describe('getAllPokemon', () => {
	test('returns an array of 10 pokemons if no input is introduced', () => {
		return getAllPokemon().then((response) => {
			expect(response).toHaveLength(10)
		})
	})
	test('returns an array of X pokemons if input is introduced', () => {
		return getAllPokemon(2).then((response) => {
			expect(response).toHaveLength(2)
		})
	})

	test('the array returned contains objects with the right properties', () => {
		const expectedProperties = ['sprite', 'num', 'species', '__typename']
		return getAllPokemon().then((response) => {
			response.forEach((pokemon) => {
				expectedProperties.forEach((property) => {
					expect(pokemon).toHaveProperty(property)
				})
			})
		})
	})
	test('the array returned do no contain any extra properties', () => {
		const expectedProperties = [
			'sprite',
			'num',
			'species',
			'__typename',
			'shinySprite',
			'types',
		]
		return getAllPokemon().then((response) => {
			response.forEach((pokemon) => {
				// Check if the object has exactly the expected properties and nothing more
				expect(Object.keys(pokemon).sort()).toEqual(expectedProperties.sort())
			})
		})
	})
	test('Invalid Input (negative number)', () => {
		const invalidInput = -123
		return getAllPokemon(invalidInput).catch((error) => {
			expect(error).toBeInstanceOf(Error)
			expect(error.message).toContain('Received one or more errors')
		})
	})
	test('Invalid Input (String)', () => {
		const invalidInput = 'test'
		return getAllPokemon(invalidInput).catch((error) => {
			expect(error).toBeInstanceOf(Error)
			expect(error.message).toContain(
				'Response not successful: Received status code 400'
			)
		})
	})
})
