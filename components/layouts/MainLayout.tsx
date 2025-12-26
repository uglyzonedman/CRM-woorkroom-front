import Sidebar from '@components/layouts/Sidebar'

interface IProps {
	children: React.ReactNode
}

const MainLayout = ({ children }: IProps) => {
	return (
		<html lang='en'>
			<body>
				<div className='flex'>
					<Sidebar />
					<main>{children}</main>
				</div>
			</body>
		</html>
		// <div>
		//
		// </div>
	)
}

export default MainLayout
