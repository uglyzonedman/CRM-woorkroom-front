import { Calendar, FolderOpenDot, LayoutDashboard, Plane } from 'lucide-react'

export const NAVIGATIONS = [
	{
		id: 1,
		icon: LayoutDashboard,
		label: 'Dashboard',
		href: '/',
	},
	{
		id: 2,
		icon: FolderOpenDot,
		label: 'Projects',
		href: '/projects',
	},
	{
		id: 3,
		icon: Calendar,
		label: 'Calendar',
		href: '/calendar',
	},
	{
		id: 4,
		icon: Plane,
		label: 'Vacations',
		href: '/vacations',
	},
]
