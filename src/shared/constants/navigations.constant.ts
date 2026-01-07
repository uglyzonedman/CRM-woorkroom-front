import CalendarIcon from "@/src/shared/assets/svg/CalendarIcon";
import DashboardIcon from "@/src/shared/assets/svg/DashboardIcon";
import EmployeeIcon from "@/src/shared/assets/svg/EmployeeIcon";
import InfoPortalIcon from "@/src/shared/assets/svg/InfoPortalIcon";
import MessengerIcon from "@/src/shared/assets/svg/MessengerIcon";
import ProjectIcon from "@/src/shared/assets/svg/ProjectIcon";
import VacationIcon from "@/src/shared/assets/svg/VacationIcon";
import { Calendar, FolderOpenDot, LayoutDashboard, Plane } from "lucide-react";

export const NAVIGATIONS = [
  {
    id: 1,
    icon: DashboardIcon,
    label: "Dashboard",
    href: "/",
  },
  {
    id: 2,
    icon: ProjectIcon,
    label: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    icon: CalendarIcon,
    label: "Calendar",
    href: "/calendar",
  },
  {
    id: 4,
    icon: VacationIcon,
    label: "Vacations",
    href: "/vacations",
  },
  {
    id: 5,
    icon: EmployeeIcon,
    label: "Employees",
    href: "/employees",
  },
  {
    id: 6,
    icon: MessengerIcon,
    label: "Messenger",
    href: "/messenger",
  },
  {
    id: 7,
    icon: InfoPortalIcon,
    label: "Info Portal",
    href: "/info-portal",
  },
];
