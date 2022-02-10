import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Image from 'next/image';
import Australia from '../public/assets/locations/desktop/image-map-australia.png';
import UnitedKingdom from '../public/assets/locations/desktop/image-map-united-kingdom.png';
import Canada from '../public/assets/locations/desktop/image-map-canada.png';

const containerStyle = {
	width: /* '350px' */ '20%',
	height: /* '326px' */ '20%',
	borderRadius: '10px',
};

function locations() {
	return (
		<div className="">
			<div className="bg-peach-card text-center flex mb-10 flex-col pb-6">
				<Image src={Canada} width={350} height={326} />
				<h2 className="mt-10 text-h3 text-peach font-medium">Canada</h2>
				<div className="flex flex-col text-center">
					<div className="my-5">
						<b>Designo Central Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-5">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>

			<div className="bg-peach-card text-center flex mb-10 flex-col pb-6">
				<Image src={Australia} width={350} height={326} />
				<h2 className="mt-10 text-h3 text-peach font-medium">Australia</h2>
				<div className="flex flex-col text-center">
					<div className="my-5">
						<b>Designo AU Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-5">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>

			<div className="bg-peach-card text-center mb-10 flex flex-col pb-6">
				<Image src={UnitedKingdom} width={350} height={326} />
				<h2 className="mt-10 text-h3 text-peach font-medium">United Kingdom</h2>
				<div className="flex flex-col text-center">
					<div className="my-5">
						<b>Designo UK Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-5">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA8FTu3YS9FTS0Wczx0joA_Z_nAIpoVORk',
})(locations);
