import React from 'react';
import Link from 'next/link';

function ServicesCard(props) {
	console.log(props);
	return (
		<div className="flex flex-row justify-center align-center self-center">
			<div className="bg-service-web mr-20 h-service-card w-service-card rounded-xl brightness-50 relative">
				<div
					className="flex flex-col my-0 mx-auto absolute top-1/2 left-1/2"
					style={{ transform: 'translate(-50%, -50%)' }}
				>
					<h2 className="text-h2 text-white font-bold">{props.title[0]}</h2>
					<p className="text-white text-center">View Projects</p>
				</div>
			</div>
			<div className="bg-service-graphic mr-20 h-service-card w-service-card rounded-xl brightness-50 relative">
				<div
					className="flex flex-col my-0 mx-auto absolute top-1/2 left-1/2"
					style={{ transform: 'translate(-50%, -50%)' }}
				>
					<h2 className="text-h2 text-white font-bold text-center w-96">
						{props.title[1]}
					</h2>
					<p className="text-white text-center">View Projects</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesCard;
