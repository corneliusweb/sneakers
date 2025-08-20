import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({ children, className = '', disabled, onClick }: Props) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`flex-center gap-4 bg-orange block w-full p-3 rounded-md justify-center ${className} cursor-pointer hover:bg-pale-orange`}
		>
			{children}
		</button>
	);
};
export default Button;
