import React from "react"
import Card from "../Card"

interface GridProps {}

interface Image {}

const CardsGrid: React.FC<GridProps> = () => {
	const imageData = [
		{
			imageSrc: "./assets/87f3f444-2f03-4e0a-91c2-90913cf4b799_4x.webp",
			title: "Creative South 2023",
		},
		{
			imageSrc: "./assets/original-81e91a282c3ce332de69954ee1115b78.webp",
			title: "Harlem",
		},
	]
	return (
		<div className='Cards-Grid'>
			<ol className='grid-layout'>
				<Card></Card>
			</ol>
		</div>
	)
}

export default CardsGrid
