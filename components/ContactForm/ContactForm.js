import React, { useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function ContactForm() {
	const form = useRef();

	const toastifySuccess = () => {
		toast.success(
			'Thanks for contacting me, I will get back to you as soon as possible 🦄',
			{
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
			}
		);

		return <div></div>;
	};

	const SubmitForm = async () => {
		emailjs
			.sendForm(
				'service_hduvm3e',
				'template_9y1g20m',
				form.current,
				'user_FzVSNIzUlIvWV3s0n3053'
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
					toastifySuccess();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="bg-peach flex flex-row justify-center self-center align-center items-center m-auto w-4/6 rounded-2xl px-10 py-16">
			<div className="flex flex-col w-4/6">
				<h2>Contact Us</h2>
				<p>
					Ready to take it to the next level? Let's talk about your project or
					idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that's relatable to your users,
					drop us a line.
				</p>
			</div>
			<div>
				<Formik
					initialValues={{
						name: '',
						phone: '',
						email: '',
						message: '',
					}}
					onSubmit={SubmitForm}
				>
					<Form className="flex flex-col" ref={form}>
						<label htmlFor="name">Name</label>
						<Field id="name" name="name" placeholder="Jane Doe " />

						<label htmlFor="phone">Phone</label>
						<Field id="phone" name="phone" />

						<label htmlFor="email">Email</label>
						<Field id="email" name="email" placeholder="janedoe@gmail.com" />

						<label htmlFor="message">Message</label>
						<Field
							id="message"
							name="message"
							placeholder="hi there!"
							type="message"
						/>
						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</div>
			<ToastContainer />
		</div>
	);
}

export default ContactForm;

//service ID: service_hduvm3e
//template ID: template_9y1g20m
//user ID: user_FzVSNIzUlIvWV3s0n3053
