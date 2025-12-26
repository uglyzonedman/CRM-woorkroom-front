import { NAVIGATIONS } from '@/constants/navigations.constant'
import logo from '@assets/images/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
	return (
		<div className='bg-white py-10 px-4'>
			<Image src={logo} alt='Logo' />
			<nav>
				<ul>
					{NAVIGATIONS.map(nav => (
						<li key={nav.id}>
							<Link href={nav.href} className='flex items-center'>
								<nav.icon width={24} height={24} color='#7D8592' />
								<span>{nav.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
