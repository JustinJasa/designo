import React from 'react';
import Image from 'next/image';
import Hero from '../public/assets/about/desktop/image-about-hero.jpg';
import Locations from '../components/locations/locations';
import ContactForm from '../components/ContactForm/ContactForm';

function contactus() {
	return (
		<section>
			<ContactForm />
			<Locations />
		</section>
	);
}

export default contactus;
