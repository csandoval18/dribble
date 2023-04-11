import React from "react"
import { CardProps } from "../utils/types"
import { BsEyeFill, BsHeartFill } from "react-icons/bs"

const Card: React.FC<CardProps> = (cardProps: CardProps) => {
	return (
		<li className='card-item'>
			<div className='card'>
				<figure>
					<img src={cardProps.imageSrc} alt='' />
				</figure>
				<div className='details'>
					<div className='user-info'>{cardProps.user}</div>
					<div className='stats'>
						<BsHeartFill></BsHeartFill>
						<BsEyeFill></BsEyeFill>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Card
