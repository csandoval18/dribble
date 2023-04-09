import React from "react"

interface TrendingSearchesProps {}

const TrendingSearches: React.FC<TrendingSearchesProps> = () => {
	return (
		<ul className='TrendingSearches trending-menu'>
			<li>
				<p>Trending searches</p>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					vector
				</a>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					flat
				</a>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					branding
				</a>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					art
				</a>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					icon
				</a>
			</li>
			<li>
				<a className='btn btn-outline' href=''>
					typography
				</a>
			</li>
		</ul>
	)
}

export default TrendingSearches
