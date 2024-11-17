import Link from "next/link";

export default function NotFound({ Heading }: { Heading?: string }) {
  return (
    <main className="h-[80vh] w-full flex flex-col justify-center items-center bg-background">
      {Heading && (
        <h1 className="text-2xl font-bold text-primary">{Heading}</h1>
      )}
      <div className="bg-primary px-2 text-background rounded font-bold transform rotate-[24deg] absolute">
        Page Not Found
      </div>
      <h1 className="lg:text-9xl md:text-7xl text-5xl font-extrabold tracking-widest mb-8">
        404
      </h1>
      <Link
        href="/"
        passHref
        className="relative inline-block group focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-white group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
        <span className="relative block px-8 py-3 bg-background font-bold group-hover:bg-primary text-sm group-hover:text-background border border-primary">
          HOME
        </span>
      </Link>
    </main>
  );
}
