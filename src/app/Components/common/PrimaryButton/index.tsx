import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  link?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  darkTextColor?: string;
  border?:string;
  weidth?:string;
}

export default function PrimaryButton({
  text,
  weidth,
  onClick,
  link = "/", // Set default link to "/"
  borderColor,
  border,
  bgColor = "", // Default bg color
  textColor = "text-white", // Default text color
  darkTextColor = "dark:text-gray-400" // Default dark mode text color
}: PrimaryButtonProps) {
  return (
    <div data-aos="fade-up">
      <Link href={link} className="cursor-pointer">
        <button
          onClick={onClick}
          className={`cursor-pointer px-10 py-2 ${bgColor} rounded-3xl ${textColor} ${darkTextColor} ${borderColor} ${border} ${weidth} font-bold`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
}
