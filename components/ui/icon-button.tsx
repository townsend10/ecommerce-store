import { cn } from "@/lib/util";
import { HtmlHTMLAttributes, MouseEventHandler } from "react";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}
const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}>
      {icon}
    </button>
  );
};

export default IconButton;
