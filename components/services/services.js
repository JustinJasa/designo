import React from 'react';
import Link from 'next/link';

function services() {
	return (
		<section className="grid grid-col-2 grid-row-2 my-20 place-items-center ">
			<div className="bg-service-web grid-rows-2 grid-col-1 rounded-2xl">
				<h2 className="text-h2 text-white font-bold">Web Design</h2>
				<Link href="/webdesign">
					<a className="text-white">View Projects</a>
				</Link>
			</div>
			<div className="bg-service-app grid-rows-1 rounded-2xl">
				<h2 className="text-h2 text-white font-bold">App Design</h2>
				<Link href="/appdesign">
					<a className="text-white">View Projects</a>
				</Link>
			</div>
			<div className="bg-service-graphic grid-rows-1 rounded-2xl">
				<h2 className="text-h2 text-white font-bold">Graphic Design</h2>
				<Link href="/graphicdesign">
					<a className="text-white">View Projects</a>
				</Link>
			</div>
		</section>
	);
}

export default services;
