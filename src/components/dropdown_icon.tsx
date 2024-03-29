function DropdownIcon({ classname, showMobileNav, mobileNavOpen }: any) {
	return (
		<button className={`${classname} $ w-6 h-6`} onClick={showMobileNav}>
			{mobileNavOpen ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6'
					style={{
						color: 'var(--color-accent-light)',
					}}
					width='48px'
					height='48px'
				>
					<path
						fillRule='evenodd'
						d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
					style={{
						color: 'var(--color-accent-light)',
					}}
					width='48px'
					height='48px'
				>
					<title>Menu</title>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
					/>
				</svg>
			)}
		</button>
	);
}

export default DropdownIcon;
