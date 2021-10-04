import React, { useState } from 'react';
import ProductCard from '../components/productcards/ProductCard';

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

	return (
		<section>
			<div className="bg-peach flex flex-col self-center align-center items-center m-auto w-4/6 rounded-2xl px-10 py-16 text-center">
				<h2 className="text-white text-h1 w-4/5 mb-5 font-bold">App Design</h2>
				<p className="w-1/2 text-white">
					Our mobile designs bring intuitive digital solutions to your customers
					right at their fingertips
				</p>
			</div>

			<ProductCard data={data} />
		</section>
	);
}

export default appdesign;
