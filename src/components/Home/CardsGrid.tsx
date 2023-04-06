import React from "react"
import Card from "../Card"

interface GridProps {}

const CardsGrid: React.FC<GridProps> = () => {
	return (
		<div className='Cards-Grid'>
			<ol className='grid-layout'>
				<Card></Card>
			</ol>
		</div>
	)
}

export default CardsGrid
