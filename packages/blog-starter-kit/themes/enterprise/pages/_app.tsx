import { AppProps } from 'next/app';
import '../styles/index.css';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={bricolageGrotesque.className}>
		  <Component {...pageProps} />
		</main>
	  );
}
