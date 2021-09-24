import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero/hero';
import Services from '../components/services/services';
import Values from '../components/values/values';

export default function Home() {
	return (
		<div>
			<Hero />
			<Services />
			<Values />
		</div>
	);
}
