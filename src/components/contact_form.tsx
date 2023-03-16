import style from '@/styles/contact_form.module.css';

export default function ContactForm() {
	return (
		<div className={style.wrapper}>
			<div className={`main-container`}>
				<h2 className={style.contact}>Get in touch!</h2>
				<form
					method='POST'
					action='/form-success'
					name='contact'
					data-netlify='true'
					className={style.contact}
				>
					<input type='hidden' name='form-name' value='contact' />
					<input
						type='hidden'
						name='subject'
						value='Contact Form submission from carsonhartley.com'
					/>
					<div className={style['user-info']}>
						<label htmlFor='name'>*Name</label>
						<input
							className={style.form}
							name='name'
							type='text'
							placeholder='Enter name here'
							required
							id='username'
						/>

						<label htmlFor='email'>*Email</label>
						<input
							className={style.form}
							name='email'
							type='email'
							placeholder='example@gmail.com'
							required
							id='useremail'
						/>
					</div>
					<textarea
						name='message'
						className={style.contact}
						required
						placeholder='Type your message here!'
						id='usermessage'
					></textarea>
					<button
						type='submit'
						className={`${style['submit-button']} `}
					>
						Send it!
					</button>
				</form>
			</div>
		</div>
	);
}
