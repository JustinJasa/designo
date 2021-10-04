import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
	width: /* '350px' */ '20%',
	height: /* '326px' */ '20%',
	borderRadius: '10px',
};

function locations() {
	return (
		<div className="grid grid-cols-3 grid-rows-3 justify-center gap-4 place-items-center">
			<div className="col-span-2 p-10 bg-peach-card rounded-2xl">
				<h2 className="my-4 text-lg tracking-widest text-peach font-bold">
					Canada
				</h2>
				<div className="flex flex-row">
					<div className="my-10  mr-10">
						<b>Designo Central Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-10 mr-10">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>
			<div style={{ width: '350px', height: '326px' }}>
				<Map google={google} style={containerStyle} />
			</div>
			<div>
				<Map google={google} style={containerStyle} />
			</div>
			<div className="col-span-2 p-10 bg-peach-card rounded-2xl">
				<h2 className="my-4 text-lg tracking-widest text-peach font-bold">
					Australia
				</h2>
				<div className="flex flex-row">
					<div className="my-10 mr-10">
						<b>Designo Central Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-10 mr-10">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>
			<div className="col-span-2 p-10 bg-peach-card rounded-2xl">
				<h2 className="my-4 text-lg tracking-widest text-peach font-bold">
					United Kingdom
				</h2>
				<div className="flex flex-row">
					<div className="my-10 mr-10">
						<b>Designo Central Office</b>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className="my-10 mr-10">
						<b>Contact</b>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>
			<div>
				{' '}
				<Map google={google} style={containerStyle} />
			</div>
		</div>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA8FTu3YS9FTS0Wczx0joA_Z_nAIpoVORk',
})(locations);
