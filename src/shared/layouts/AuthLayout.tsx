import logo from "@/assets/images/logo_auth.png";
import auth_photo from "@assets/images/auth_photo.png";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex bg-[#F4F9FD]">
      <div className="bg-[#3F8CFF] px-21 py-16 h-[calc(100vh-40px)] my-5 ml-5 rounded-l-3xl w-[40%]">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h3 className="ml-7.5 text-3xl font-bold text-white">Woorkroom</h3>
        </div>
        <p className="text-[40px] font-bold text-white max-w-100 mt-11">
          Your place to work Plan. Create. Control.
        </p>
        <div className="mt-12.5">
          <Image src={auth_photo} alt="auth_photo" />
        </div>
      </div>
      <div className="bg-white px-21 py-16 h-[calc(100vh-40px)] my-5 mr-5 rounded-r-3xl flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
