import React from 'react';
import Image from 'next/image';
import Passionate from '../../public/assets/home/desktop/illustration-passionate.svg';
import Resourceful from '../../public/assets/home/desktop/illustration-resourceful.svg';
import Friendly from '../../public/assets/home/desktop/illustration-friendly.svg';

function values() {
	return (
		<div className="flex md:flex-row flex-col justify-center items-center text-center mb-20">
			<div>
				<Image src={Passionate} alt="passion" />
				<h3 className="p-6 text-lg font-medium tracking-wider">PASSIONATE</h3>
				<p className="w-4/5 m-auto tracking-wide">
					Each project starts with an in-depth brand research to ensure we only
					create products taht serve a purpose. We merge art, design and
					technology into exciting new solutions.
				</p>
			</div>
			<div>
				<Image src={Resourceful} alt="passion" />
				<h3 className="p-6 text-lg font-medium tracking-wider">RESOURCEFUL</h3>
				<p className="w-4/5 m-auto tracking-wide">
					Everything that we do has a strategic purpose. We use an agile
					approach in all our projects and value customer collaboration. It
					guarantees superior results that fulfil our clients' needs.
				</p>
			</div>
			<div>
				<Image src={Friendly} alt="passion" />
				<h3 className="p-6 text-lg font-medium tracking-wider">FRIENDLY</h3>
				<p className="w-4/5 m-auto tracking-wide">
					We are a group of ethusiastic folks who know how to our people first.
					Our success depends on our customers, and we strive to give them the
					best experience a company can provide.
				</p>
			</div>
		</div>
	);
}

export default values;
