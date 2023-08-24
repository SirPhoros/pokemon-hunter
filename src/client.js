import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

// Instantiate required constructor fields
const cache = new InMemoryCache()
const link = new HttpLink({
	uri: 'https://graphqlpokemon.favware.tech/v7',
})

export const client = new ApolloClient({
	// Provide required constructor fields
	cache: cache,
	link: link,

	// Provide some optional constructor fields
	name: 'graphql-pokemon-client',
	version: '1.0',
	queryDeduplication: false,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
		},
	},
})
