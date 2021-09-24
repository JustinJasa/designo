import React from 'react';
import Link from 'next/link';

function services() {
	return (
		<section className="my-20">
			<div className="bg-service-web">
				<h2>Web Design</h2>
				<Link href="/webdesign">
					<a>View Projects</a>
				</Link>
			</div>
			<div>
				<h2>App Design</h2>
				<Link href="/appdesign">
					<a>View Projects</a>
				</Link>
			</div>
			<div>
				<h2>Graphic Design</h2>
				<Link href="/graphicdesign">
					<a>View Projects</a>
				</Link>
			</div>
		</section>
	);
}

export default services;
