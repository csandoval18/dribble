import React from "react"

interface CardProps {}

const Card: React.FC<CardProps> = () => {
	return (
		<li className='card'>
			<figure>
				<img src='' alt='' />
			</figure>
		</li>
	)
}

export default Card
