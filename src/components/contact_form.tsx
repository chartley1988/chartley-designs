import style from '@/styles/contact_form.module.css';

export default function ContactForm() {
	return (
		<div className={style.wrapper}>
			<div className={`main-container`}>
				<h2 className={style.contact}>Get in touch!</h2>
				<form action='' data-netlify='true' className={style.contact}>
					<div className={style['user-info']}>
						<label htmlFor='name'>Name</label>
						<input
                            className={style.form}
							name='name'
							type='text'
							placeholder='Carson Hartley'
						/>

						<label htmlFor='email'>Email</label>
						<input
                            className={style.form}
							name='email'
							type='text'
							placeholder='example@gmail.com'
						/>
					</div>
					<div>
						<textarea
							name='message'
							className={style.contact}
						></textarea>
					</div>
				</form>
			</div>
		</div>
	);
}
