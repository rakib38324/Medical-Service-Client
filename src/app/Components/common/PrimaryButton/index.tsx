import Image from "next/image";
import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  link?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  darkTextColor?: string;
}

export default function PrimaryButton({
  text,
  onClick,
  link = "/", // Set default link to "/"
  borderColor,
  bgColor = "", // Default bg color
  textColor = "text-white", // Default text color
  darkTextColor = "dark:text-gray-400" // Default dark mode text color
}: PrimaryButtonProps) {
  return (
    <div data-aos="fade-up">
      <Link href={link} className="cursor-pointer">
        <button
          onClick={onClick}
          className={`cursor-pointer px-10 py-2 ${bgColor} rounded-3xl ${textColor} ${darkTextColor} ${borderColor} font-bold`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
