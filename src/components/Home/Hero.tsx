import React from "react"
import TrendingSearches from "./TrendingSearches"
import {BiSearch} from "react-icons/bi"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	return (
		<section className='Hero'>
			<div className='hero-media'>
				<video
					className='hero-media-asset is-visible'
					autoPlay={true}
					muted={true}
					loop={true}
					data-hero-video=''
					data-src-lg='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
					data-src-sm='https://cdn.dribbble.com/uploads/39418/original/0cc960a3bf612d0badc4f6165eb36f7b.mp4?1657824915'
				>
					<source
						src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
						type='video/mp4'
					/>
				</video>
				<div className='hero-overlay'>
					<div className='hero-menu'>
						<ul>
							<li>
								<a className='btn btn-hero' href='#'>
									Discover
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Animation
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Branding
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Illustration
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Mobile
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Print
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Product Design
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Web Design
								</a>
							</li>
						</ul>
					</div>
					<div className='hero-headings'>
						<h1>Trending web & landing page designs</h1>
						<p className='sub-heading'>
							Explore trending Web Design, Response Design, User Experience and
							User Interfaces from popular design portfolios
						</p>
					</div>
					<div className='search-input-hero search-input-with-dropdown'>
                        <BiSearch className="search-input-icon"/>
						<form
							action='/search'
							className='js-search-input-form search-input-form'
							method='get'
						>
							<label htmlFor='search' className='accessibility-text'>
								Search
							</label>
							<input
								id='search'
								type='search'
								name='q'
								placeholder='Search...'
								value=''
								className='search-input js-search-input'
							/>
						</form>
					</div>
					<TrendingSearches />
				</div>
			</div>
		</section>
	)
}

export default Hero
