import { forwardRef } from 'react';

type Props = {
	label: string;
	type?: string;
	icon?: React.ReactNode;
	className?: string;
	secondaryIcon?: React.ReactNode;
	href?: string;
	onClick?: () => void;
	as?: string;
	rel?: string;
	target?: string;
	disabled?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ label, type, icon, className, secondaryIcon, href, rel, as, target, onClick, disabled }, ref) => {
		let buttonClassName: string;

		switch (type) {
			case 'outline':
				buttonClassName =
					'text-slate-950 bg-transparent dark:border-neutral-800 hover:bg-slate-50 dark:bg-transparent dark:hover:bg-neutral-800 dark:text-white';
				break;

			case 'primary':
				buttonClassName =
					'text-white bg-brand hover:bg-brand-mid';
				break;

			case 'outline-dark':
				buttonClassName =
					'text-white bg-transparent hover:bg-white hover:text-black dark:bg-neutral-900 dark:text-white';
				break;

			default:
				buttonClassName =
					'text-white bg-primary-600 hover:bg-primary-500 border-primary-600 dark:bg-primary-600 dark:text-white';
		}

		if (as === 'a') {
			return (
				<a
					href={href}
					rel={rel}
					target={target}
					className={`flex flex-row items-center justify-start gap-2 rounded-lg border p-2.5 text-[22px] leading-5 tracking-wide font-semibold ${buttonClassName} ${
						secondaryIcon ? `md:justify-between` : `md:justify-center`
					}  ${className}`} 
				>
					<div className="flex flex-row items-center gap-2">
						{icon && <div className="shrink-0">{icon}</div>}
						{label || null}
					</div>
					{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
				</a>
			);
		}

		return (
			<button
				ref={ref}
				onClick={onClick}
				className={`flex flex-row items-center justify-start gap-2 rounded-lg border p-2.5 text-[22px] leading-5 tracking-wide font-semibold disabled:cursor-not-allowed disabled:opacity-80 ${buttonClassName} ${
					secondaryIcon ? `md:justify-between` : `md:justify-center`
				}  ${className}`}
				disabled={disabled}
			>
				<div className="flex flex-row items-center gap-2">
					{icon && <div className="shrink-0">{icon}</div>}
					{label || null}
				</div>
				{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
			</button>
		);
	},
);

Button.displayName = 'Button';
