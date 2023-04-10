import React from "react"
import { CardProps } from "../utils/types"

const Card: React.FC<CardProps> = (cardProps: CardProps) => {
	return (
		<li className='card'>
			<figure>
				<img src={cardProps.imageSrc} alt='' />
			</figure>
			<div className='details'>
				<div className='user-info'></div>
				<div className='stats'></div>
			</div>
		</li>
	)
}

export default Card
