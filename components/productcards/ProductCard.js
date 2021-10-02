import React from 'react';
import Image from 'next/image';

function ProductCard({ data }) {
	return (
		<div className="grid grid-cols-3 grid-rows-2 place-items-center m-32 gap-4">
			{data.map((item, i) => {
				return (
					<div>
						<div className="w-card h-card bg-peach-card rounded-3xl text-center">
							<img key={i} src={item.img} alt={item.title} />
							<h2 className="my-4 text-lg tracking-widest text-peach" key={i}>
								{item.title}
							</h2>
							<p className="px-6" key={i}>
								{item.desc}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProductCard;
