import ArrowIcon from "@/src/shared/assets/svg/ArrowIcon";
import NotificationIcon from "@/src/shared/assets/svg/NotificationIcon";
import Sidebar from "@/src/shared/layouts/Sidebar";
import Input from "@/src/shared/ui/input/Input";

interface IProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full mt-5 mr-10">
        {/* header */}
        <div className="w-full flex items-center justify-between">
          <div>
            <Input
              theme="search"
              searchIcon={true}
              width="103"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center">
            <button className="bg-white p-3 mx-auto rounded-[14px]  cursor-pointer">
              <NotificationIcon />
            </button>
            <button className="cursor-pointer bg-white rounded-[14px] flex items-center ml-6 py-2.5  px-3">
              <div className="w-7.5 h-7.5 bg-[#3F8CFF] rounded-full mr-2.5 ">
                <span className="text-white font-semibold text-xl mx-auto h-full flex justify-center items-center ">
                  D
                </span>
              </div>
              <h3 className="font-bold text-base text-[#0A1629]">
                Dmitry Moiseenko
              </h3>
              <span className="ml-3">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>
        {/* header */}

        {/* main content */}

        <div>{children}</div>

        {/* main content */}
      </main>
    </div>
  );
};

export default MainLayout;
