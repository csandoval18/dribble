import React from 'react';
import { CardProps } from '../../utils/types';
import { BsEyeFill, BsHeartFill } from 'react-icons/bs';

const Card: React.FC<CardProps> = (
	cardProps: CardProps,
) => {
	return (
		<li className='card-item'>
			<div className='card'>
				<div className='card-bg-wrapper'>
					<figure>
						<img
							src={cardProps.imageSrc}
							alt=''
						/>
					</figure>
					<div className='card-hover-content'>
						<span className='title'>
							{cardProps.title}
						</span>
						<div className='icon-menu'></div>
					</div>
				</div>
				<div className='details'>
					<div className='user-info'>
						<span className='user-avatar'></span>
						<span className='user-name'>
							{cardProps.user}
						</span>
					</div>
					<div className='stats'>
						<span className='likes'>
							<BsHeartFill></BsHeartFill>
							{cardProps.likes}
						</span>
						<span className='views'>
							<BsEyeFill></BsEyeFill>
							{cardProps.views}
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Card;
