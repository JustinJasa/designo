import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../components/productcards/ProductCard';
import Express from '../public/assets/web-design/desktop/image-express.jpg';

function webdesign() {
	const [data, setData] = useState([
		{
			img: '../public/assets/web-design/desktop/image-transfer.jpg',
			title: 'EXPRESS',
			desc: 'A multi-carrier shipping website for ecommerce businesses',
		},
		{
			img: '../public/assets/web-design/desktop/image-transfer.jpg',
			title: 'TRANSFER',
			desc: 'Site for low-cost money transfer and sending money with seconds',
		},
		{
			img: '../public/assets/web-design/desktop/image-express.jpg',
			title: 'PHOTON',
			desc: 'A state-of-the-art music player with high-resolution audio',
		},
		{
			img: '../public/assets/web-design/desktop/image-express.jpg',
			title: 'BUILDER',
			desc: 'Connects users with local contractors based on their location',
		},
		{
			img: '../public/assets/web-design/desktop/image-express.jpg',
			title: 'BLOGR',
			desc: 'Blogr is a platform for creating an online blog or publication',
		},
		{
			img: '../public/assets/web-design/desktop/image-express.jpg',
			title: 'CAMP',
			desc: 'Get expert training in coding, data, design and digital marketing',
		},
	]);

	return (
		<section>
			<div className="bg-peach flex flex-col self-center align-center items-center m-auto w-4/6 rounded-2xl px-10 py-16 text-center">
				<h2 className="text-white text-h1 w-4/5 mb-5 font-bold">Web Design</h2>
				<p className="w-1/2 text-white">
					We Build Websites that servce as powerful marketing tools and bring
					memorable brand experiences
				</p>
			</div>

			<ProductCard data={data} />
		</section>
	);
}

export default webdesign;
