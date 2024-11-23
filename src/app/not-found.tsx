import { LinkButton } from "@/components/ui/linkButton";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="h-[80vh] text-center w-full flex flex-col justify-center items-center gap-4 md:gap-8 bg-background py-6">
      <Image
        src="/error.svg"
        alt="404"
        width={350}
        height={350}
        className="opacity-80"
      />
      <h1 className="text-4xl font-bold text-primary uppercase">
        Page Not Found
      </h1>
      <LinkButton href="/">Go Home</LinkButton>
    </main>
  );
}
