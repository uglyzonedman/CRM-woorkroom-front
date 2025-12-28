import Sidebar from "@components/layouts/Sidebar";
import localFont from "next/font/local";

interface IProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
