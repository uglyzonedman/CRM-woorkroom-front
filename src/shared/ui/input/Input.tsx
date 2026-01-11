"use client";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchIcon?: boolean;
  theme?: "base" | "search";
  width?: string;
  className?: string;
  label?: string;
}

const Input = ({
  searchIcon,
  theme = "base",
  width = "full",
  className,
  label,
  type,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div>
      {label && (
        <label className="text-[#7D8592] text-[14px] font-bold mb-2 block">
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex items-center gap-2",
          `w-${width}`,
          theme === "search" && "bg-white rounded-[14px] py-3 px-4.5",
          theme === "base" &&
            "bg-transparent border border-[#D8E0F0] rounded-[14px] px-3 py-3",
          className
        )}
      >
        {searchIcon && <SearchIcon />}

        <input
          {...props}
          type={isPassword && showPassword ? "text" : type}
          className="bg-transparent outline-none w-full"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="text-[#7D8592] cursor-pointer hover:text-[#1A1A1A] transition"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
