import { NAVIGATIONS } from "@/constants/navigations.constant";
import logo from "@assets/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import support_image from "@assets/images/support.png";
import SupportMessageIcon from "@/shared/svg/SupportMessageIcon";
import LogoutIcon from "@/shared/svg/LogoutIcon";
const Sidebar = () => {
  const page = "/";

  return (
    <div className="bg-white px-5 w-full max-w-50 my-5 mx-5 h-[calc(100vh-40px)] rounded-3xl shadow-sm">
      {/* ВАЖНО: flex-col + h-full */}
      <div className="flex flex-col h-full justify-between">
        {/* 🔝 Верх: лого + навигация */}
        <div>
          <div className="mt-10">
            <Image src={logo} alt="Logo" />
          </div>

          <nav className="mt-10.5">
            <ul>
              {NAVIGATIONS.map((nav) => (
                <li className="my-2" key={nav.id}>
                  <Link
                    href={nav.href}
                    className={`flex items-center py-2.5 px-2 gap-4 ${
                      page === nav.href ? "bg-[#F4F9FD] rounded-[10px]" : ""
                    }`}
                  >
                    <span className="w-6 h-6 flex items-center justify-center shrink-0">
                      <nav.icon />
                    </span>

                    <span
                      className={`text-base ${
                        page === nav.href
                          ? "text-[#3F8CFF] font-bold"
                          : "text-[#7D8592] font-semibold"
                      }`}
                    >
                      {nav.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 🔽 Низ: support-блок */}
        <div className="pb-5">
          <div className="relative w-full h-42 bg-[#EBF3FF] rounded-3xl overflow-visible">
            <Image
              src={support_image}
              width={140}
              height={124}
              alt="support"
              className="absolute -top-10 left-1/2 -translate-x-1/2"
            />

            <div className="flex items-end justify-center h-full pb-6">
              <button className="cursor-pointer flex items-center bg-[#3F8CFF] text-white rounded-[14px] px-4 py-3">
                <SupportMessageIcon />
                <span className="ml-2 font-bold text-base">Support</span>
              </button>
            </div>
          </div>
          <div className="mt-12.5">
            <button className="cursor-pointer flex items-center">
              <LogoutIcon />
              <span className="block ml-4 text-base font-semibold text-[#7D8592]">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
