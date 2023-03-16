import style from '@/styles/contact_form.module.css';

export default function ContactForm() {
	return (
		<div className={style.wrapper}>
			<div className={`main-container`}>
				<h2 className={style.contact}>Get in touch!</h2>
				<form
					action='POST'
					name='contact'
					data-netlify='true'
					className={style.contact}
				>
					<div className={style['user-info']}>
						<label htmlFor='name'>*Name</label>
						<input
							className={style.form}
							name='name'
							type='text'
							placeholder='Carson Hartley'
							required
						/>

						<label htmlFor='email'>*Email</label>
						<input
							className={style.form}
							name='email'
							type='email'
							placeholder='example@gmail.com'
							required
						/>
					</div>
					<textarea
						name='message'
						className={style.contact}
						required
						placeholder='Type your message here!'
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
