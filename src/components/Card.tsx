import React from "react"
import cardImg from "../assets/original-81e91a282c3ce332de69954ee1115b78.webp"

interface CardProps {}

const Card: React.FC<CardProps> = () => {
	return (
		<li className='card'>
			<figure>
				<img src={cardImg} alt='' />
			</figure>
			<div className='details'>
				<div className='user-info'></div>
				<div className='stats'></div>
			</div>
		</li>
	)
}

export default Card
