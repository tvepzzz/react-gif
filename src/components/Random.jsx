import React from 'react'
import { Button } from '@chakra-ui/react'
import useGif from '../hooks/useGif'

const Random = () => {
	const { gif, fetchGif } = useGif()

	return (
		<div className="flex gap-4 flex-col">
			<div>
				<h1 className="font-semibold text-xl mb-2">Random GIF</h1>
				<img width="500" src={gif} alt="" />
			</div>
			<div>
				<Button colorScheme="blue" variant="outline" onClick={fetchGif}>
					Change gif
				</Button>
			</div>
		</div>
	)
}

export default Random
