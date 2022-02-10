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
		<div className="bg-peach flex md:flex-row flex-col justify-center self-center align-center items-center w-full md:w-4/6 md:rounded-2xl md:px-10 md:py-16 pb-20">
			<div className="flex flex-col mb-10">
				<h2 className="text-white text-h2 py-6 text-center mt-6">Contact Us</h2>
				<p className="text-white text-center w-5/6 m-auto">
					Ready to take it to the next level? Let's talk about your project or
					idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that's relatable to your users,
					drop us a line.
				</p>
			</div>
			<div className="w-full flex flex-col">
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
						<label className="pl-4 text-white" htmlFor="name">
							Name
						</label>
						<Field
							className="bg-peach pl-4 mx-4 border-0 border-b border-solid border-white"
							id="name"
							name="name"
						/>

						<label className="pl-4 my-4 text-white" htmlFor="phone">
							Phone
						</label>
						<Field
							className="bg-peach pl-4 mx-4 border-0 border-b border-solid border-white"
							id="phone"
							name="phone"
						/>

						<label className="pl-4 my-4 text-white" htmlFor="email">
							Email
						</label>
						<Field
							className="bg-peach pl-4 mx-4 border-0 border-b border-solid border-white"
							id="email"
							name="email"
						/>

						<label className="pl-4 my-4 text-white" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							type="message"
							className="bg-peach pl-4 mx-4 border-0 border-b border-solid border-white"
						/>
						<button
							className="py-2 text-black bg-white rounded my-4 w-1/2 m-auto uppercase text-medium text-mobile"
							type="submit"
						>
							Submit
						</button>
					</Form>
				</Formik>
			</div>
			<ToastContainer />
		</div>
	);
}

export default ContactForm;
