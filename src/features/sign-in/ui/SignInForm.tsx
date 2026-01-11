import ArrowSignInIcon from "@/src/shared/assets/svg/ArrowSignInIcon";
import DoneIcon from "@/src/shared/assets/svg/DoneIcon";
import Input from "@/src/shared/ui/input/Input";
import Link from "next/link";

const SignInForm = () => {
  return (
    <form>
      <h3 className="text-[#0A1629] text-[22px]  font-bold text-center">
        Sign In to Woorkroom
      </h3>
      <div className="mt-8">
        <Input
          type="email"
          placeholder="youremail@gmail.com"
          theme="base"
          label="Email Address"
        />
      </div>
      <div className="mt-7.5">
        <Input
          type="password"
          placeholder="••••••••"
          theme="base"
          className="mt-2.5"
          label="Password"
        />
      </div>

      <div className="flex mt-8.5 items-center">
        <div className="flex items-center ">
          <button
            type="button"
            className="border-[#0A1629] cursor-pointer border-2 p-0.5 rounded-sm"
          >
            <DoneIcon />
          </button>
          <span className="text-[#7D8592] text-base ml-3.5 ">Remember me</span>
        </div>
        <Link className="ml-auto text-[#7D8592] text-base" href="#">
          Forgot Password?
        </Link>
      </div>

      <button className="cursor-pointer flex items-center text-white bg-[#3F8CFF] px-11 py-3 rounded-xl mx-auto mt-12">
        <span className="font-bold text-base mr-2">Sign In</span>
        <ArrowSignInIcon />
      </button>
    </form>
  );
};

export default SignInForm;
