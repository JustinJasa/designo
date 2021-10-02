import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
	width: '300px',
	height: '300px',
};

function locations() {
	return (
		<div className="grid grid-cols-3 grid-rows-3">
			<div className="col-span-2">
				<h2>Canada</h2>
				<div>
					<b>Designo Central Office</b>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div>
					<b>Contact</b>
					<p>P : +1 253-863-8967</p>
					<p>M : contact@designo.co</p>
				</div>
			</div>
			<div>
				<Map google={google} style={containerStyle} />
			</div>
			<div>
				<Map google={google} style={containerStyle} />
			</div>
			<div className="col-span-2">
				<h2>Australia</h2>
				<div>
					<b>Designo Central Office</b>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div>
					<b>Contact</b>
					<p>P : +1 253-863-8967</p>
					<p>M : contact@designo.co</p>
				</div>
			</div>
			<div className="col-span-2">
				<h2>United Kingdom</h2>
				<div>
					<b>Designo Central Office</b>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div>
					<b>Contact</b>
					<p>P : +1 253-863-8967</p>
					<p>M : contact@designo.co</p>
				</div>
			</div>
			<div>
				<Map google={google} style={containerStyle} />
			</div>
		</div>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyA8FTu3YS9FTS0Wczx0joA_Z_nAIpoVORk',
})(locations);
