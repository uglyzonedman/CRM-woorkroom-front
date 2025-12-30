import SearchIcon from '@/shared/svg/SearchIcon'
import { cn } from '@/shared/utils/cn'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	searchIcon?: boolean
	theme?: 'base' | 'search'
	width?: string // можно передавать Tailwind ширину, например 'full', '64', '1/2'
	className?: string
}

const Input = ({
	searchIcon,
	theme = 'base',
	width = 'full',
	className,
	...props
}: InputProps) => {
	return (
		<div
			className={cn(
				'flex items-center',
				`w-${width}`,
				theme === 'search' && 'bg-white rounded-[14px] py-3 px-4.5',
				theme === 'base' &&
					'bg-gray-50 border border-gray-200 rounded-md px-3 py-2',
				className
			)}
		>
			{searchIcon && <SearchIcon />}
			<input {...props} className='bg-transparent outline-none w-full ml-2.5' />
		</div>
	)
}

export default Input
