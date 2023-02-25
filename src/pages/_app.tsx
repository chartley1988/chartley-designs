import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Andada_Pro, Tangerine } from 'next/font/google';

const andada = Andada_Pro({
	subsets: ['latin'],
});
const tangerine = Tangerine({
	weight: '400',
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	<style jsx global>
		{`
			html {
				font-family: ${andada.style.fontFamily};
			}
		`}
	</style>;
	return (
		<main className={andada.className}>
			<Component {...pageProps} />
		</main>
	);
}
