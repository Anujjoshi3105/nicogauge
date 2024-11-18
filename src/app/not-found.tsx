import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[80vh] text-center w-full flex flex-col justify-center items-center gap-4 md:gap-8 bg-background">
      <Image
        src="error.svg"
        alt="404"
        width={350}
        height={350}
        className="opacity-80"
      />
      <h1 className="text-4xl font-bold text-primary">Page Not Found</h1>
      <Link
        href="/"
        passHref
        className="relative inline-block group focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-primary group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
        <span className="relative block px-8 py-3 bg-background font-bold group-hover:bg-white/10 group-hover:text-background text-sm border border-primary">
          Go Home
        </span>
      </Link>
    </main>
  );
}
