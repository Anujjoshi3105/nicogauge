import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Password = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

    return (
      <div className="relative text-black">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-9 w-full rounded-md bg-foreground px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        <div
          className="text-background hover:opacity-80 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none"
          onClick={handleTogglePassword}>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </div>
      </div>
    );
  }
);

Password.displayName = "Password";

export { Password };
