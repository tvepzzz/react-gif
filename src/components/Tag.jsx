import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import useGif from '../hooks/useGif'

const Tag = () => {
	const [tag, setTag] = useState('dogs')
	const { gif, fetchGif } = useGif(tag)

	return (
		<div className="flex gap-4 flex-col">
			<div>
				<h1 className="font-semibold text-xl mb-2">Random {tag} GIF</h1>
				<img src={gif} width="500" alt={tag} />
			</div>
			<div className="flex flex-row items-center gap-2">
				<Input
					variant="filled"
					placeholder="Search GIF"
					width="500"
					value={tag}
					onChange={e => setTag(e.target.value)}
				/>
				<Button
					colorScheme="blue"
					variant="outline"
					onClick={() => fetchGif(tag)}
				>
					Change {tag} gif
				</Button>
			</div>
		</div>
	)
}

export default Tag
