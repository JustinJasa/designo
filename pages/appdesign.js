import React, { useState } from 'react';
import ProductCard from '../components/productcards/ProductCard';
import ServicesCard from '../components/ServicesCard/ServicesCard';

function appdesign() {
	const [data, setData] = useState([
		{
			img: '/../public/assets/app-design/desktop/image-airfilter.jpg',
			title: 'AIRFILTER',
			desc: 'Solving the problem of poor indoor air quality by filtering the air',
		},
		{
			img: '/../public/assets/app-design/desktop/image-eyecam.jpg',
			title: 'EYECAM',
			desc: 'Product that lets you edit your favorite photos and videos at any time',
		},
		{
			img: '/../public/assets/app-design/desktop/image-faceit.jpg',
			title: 'FACEIT',
			desc: 'Get to meet your favorite internet superstar with the faceit app',
		},
		{
			img: '/../public/assets/app-design/desktop/image-todo.jpg',
			title: 'TODO',
			desc: 'A todo app that feature cloud sync with light and dark mode',
		},
		{
			img: '/../public/assets/app-design/desktop/image-loopstudios.jpg',
			title: 'LOOPSTUDIOS',
			desc: 'A VR experience app made for loop studios',
		},
	]);

	const titles = ['Web Design', 'Graphic Design'];

	const links = ['/webdesign', '/graphicdesign'];

	return (
		<section>
			<div className="bg-peach flex flex-col self-center align-center items-center m-auto w-full md:w-4/6 md:rounded-2xl px-10 py-16 text-center">
				<h2 className="text-white text-h2 mb-5 font-medium">App Design</h2>
				<p className="md:w-1/2 text-mobile text-white">
					Our mobile designs bring intuitive digital solutions to your customers
					right at their fingertips.
				</p>
			</div>
			<ProductCard data={data} />
			<ServicesCard title={titles} links={links} />
		</section>
	);
}

export default appdesign;
