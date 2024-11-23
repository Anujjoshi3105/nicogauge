import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        passHref
        className={cn(
          "relative inline-block group focus:outline-none focus:ring",
          className
        )}
        ref={ref}
        {...props}>
        <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-primary group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
        <span className="relative block px-8 py-3 bg-background font-semibold group-hover:bg-white/10 group-hover:text-background text-sm border border-primary">
          {children}
        </span>
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
