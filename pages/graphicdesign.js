import React, { useState } from 'react';
import ProductCard from '../components/productcards/ProductCard';
import ServicesCard from '../components/ServicesCard/ServicesCard';

function GraphicDesign() {
	const [data, setData] = useState([
		{
			img: '/../public/assets/graphic-design/desktop/image-change.jpg',
			title: 'TIM BROWN',
			desc: `A book cover designed for Tim Brown's new release, 'Change'`,
		},
		{
			img: '/../public/assets/graphic-design/desktop/image-boxed-water.jpg',
			title: 'BOXED WATER',
			desc: 'A simple packaging concept made for Boxed Water',
		},
		{
			img: '/../public/assets/graphic-design/desktop/image-science.jpg',
			title: 'SCIENCE !',
			desc: 'A poster made in collaboration with the Federal Art Project',
		},
	]);

	const titles = ['Web Design', 'App Design'];

	const links = ['/webdesign', '/appdesign'];

	return (
		<section>
			<div className="bg-peach flex flex-col self-center align-center items-center m-auto w-full md:w-4/6 md:rounded-2xl px-10 py-16 text-center">
				<h2 className="text-white text-h2 mb-5 font-medium">Graphic Design</h2>
				<p className="md:w-1/2 text-mobile text-white">
					We deliver eye-catching branding materials that are tailored to meet
					your business objectives.
				</p>
			</div>
			<ProductCard data={data} />
			<ServicesCard title={titles} links={links} />
		</section>
	);
}

export default GraphicDesign;
