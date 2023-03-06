function DropdownIcon({ classname, showMobileNav }: any) {
	return (
		<button className={`${classname} $ w-6 h-6`} onClick={showMobileNav}>
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
		</button>
	);
}

export default DropdownIcon;
