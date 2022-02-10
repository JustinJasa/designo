import React, { useState } from 'react';
import ProductCard from '../components/productcards/ProductCard';
import Image from 'next/image';
import Express from '../public/assets/web-design/desktop/image-express.jpg';
import ServicesCard from '../components/ServicesCard/ServicesCard';

function webdesign() {
	const [data, setData] = useState([
		{
			img: '/../public/assets/web-design/desktop/image-express.jpg',
			title: 'EXPRESS',
			desc: 'A multi-carrier shipping website for ecommerce businesses',
		},
		{
			img: '/../public/assets/web-design/desktop/image-transfer.jpg',
			title: 'TRANSFER',
			desc: 'Site for low-cost money transfer and sending money with seconds',
		},
		{
			img: '/../public/assets/web-design/desktop/image-photon.jpg',
			title: 'PHOTON',
			desc: 'A state-of-the-art music player with high-resolution audio',
		},
		{
			img: '/../public/assets/web-design/desktop/image-builder.jpg',
			title: 'BUILDER',
			desc: 'Connects users with local contractors based on their location',
		},
		{
			img: '/../public/assets/web-design/desktop/image-blogr.jpg',
			title: 'BLOGR',
			desc: 'Blogr is a platform for creating an online blog or publication',
		},
		{
			img: '/../public/assets/web-design/desktop/image-camp.jpg',
			title: 'CAMP',
			desc: 'Get expert training in coding, data, design and digital marketing',
		},
	]);

	const titles = ['App Design', 'Graphic Design'];

	const links = ['/appdesign', '/graphicdesign'];

	return (
		<section>
			<div className="bg-peach flex flex-col self-center align-center items-center m-auto w-full md:w-4/6 md:rounded-2xl px-10 py-16 text-center">
				<h2 className="text-white text-h2 mb-5 font-medium">Web Design</h2>
				<p className="md:w-1/2 text-mobile text-white">
					We Build Websites that servce as powerful marketing tools and bring
					memorable brand experiences
				</p>
			</div>

			<ProductCard data={data} />
			<ServicesCard title={titles} links={links} />
		</section>
	);
}

export default webdesign;
