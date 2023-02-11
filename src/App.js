import * as React from 'react'

import { ChakraProvider, Container } from '@chakra-ui/react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
	return (
		<ChakraProvider>
			<h1 className="font-bold text-2xl text-center">GIF Generator</h1>
			<Container
				maxW="8xl"
				className="flex flex-row flex-wrap gap-10 items-center justify-center my-6"
			>
				<Random />
				<Tag />
			</Container>
		</ChakraProvider>
	)
}

export default App
