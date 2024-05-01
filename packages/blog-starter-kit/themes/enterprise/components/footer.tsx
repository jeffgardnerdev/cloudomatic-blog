import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t border-t-brand-lighter pt-[50px] pb-[15px] px-[5%]">
			<Container className="flex flex-row max-w-[900px] justify-between">
				<div className="flex flex-col gap-2.5">
					{PUBLICATION_LOGO ? (
						<div className="flex w-full flex-row">
							<Link
								href={'/'}
								aria-label={`${publication.title} home page`}
								className="flex flex-row items-center gap-5"
							>
								<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
							</Link>
						</div>
					) : (
						<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
							{publication.title}
						</p>
					)}
					<div className="text-[1.3vw] text-brand-gray">
						<p>
							Boutique AWS consultancy for growing teams
						</p>
						<p>
							Charlotte • NC
						</p>
					</div>
				</div>
				<div className="flex flex-row gap-16">
					<div className="col-span-full md:col-span-2 lg:col-span-1">
						<p className="mb-3 uppercase font-bold text-brand text-[1.2em] leading-4 tracking-wide">
							Company
						</p>
						<ul className="flex flex-col mt-3 gap-1.5 text-brand-gray text-[1.1em] leading-4">
							<li className="py-1.5">
								<a href="#who-we-are" className="hover:underline">
									Who we are
								</a>
							</li>
							<li className="py-1.5">
								<a href="#what-we-do" className="hover:underline">
									What we do
								</a>
							</li>
							<li className="py-1.5">
								<a href="https://cal.com/cloudomatic-jeff/intro-chat" target="_blank" className="hover:underline">
									Book a call
								</a>
							</li>
							<li className="py-1.5">
								<a href="mailto:hello@cloudomatic.dev?subject=Job Inquiry" className="hover:underline">
									Work with us
								</a>
							</li>
						</ul>
					</div>
					<div className="col-span-full md:col-span-2 lg:col-span-1">
						<p className="mb-3 uppercase font-bold text-brand text-[1.2em] leading-4 tracking-wide">
							About
						</p>
						<ul className="flex flex-col mt-3 gap-1.5 text-brand-gray text-[1.1em] leading-4">
							<li className="py-1.5">
								<a href="#" className="hover:underline">
									Terms & Conditions
								</a>
							</li>
							<li className="py-1.5">
								<a href="#" className="hover:underline">
									Privacy policy
								</a>
							</li>
							<li className="py-1.5">
								<SocialLinks />
							</li>
						</ul>
					</div>
				</div>
			</Container>
			<Container className="mt-[70px] mb-[15px] w-full h-[1px] bg-[#e4ebf3]" />
			<Container>
				<p className="text-center text-brand text-[1.3vw]">
					Copyright © 2024 Cloudomatic
				</p>
			</Container>
		</footer>
	);
};
