import { AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import { bottomLinks, footerLinks } from "@/data/data";

export default function Footer() {
  return (
    <footer className="border-t border-primary bg-background">
      <div className="p-12">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="text-xl lg:text-2xl text-primary hover:text-white font-bold block mb-4">
              NicoGauge
            </Link>
            <p className="md:max-w-xs max-w-sm mx-auto md:mx-0">
              A digital platform designed to evaluate cigarette addiction levels
              and the influence of neuromarketing strategies, empowering users
              with personalized insights and actionable guidance.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h5 className="text-lg font-bold uppercase mb-3 text-primary">
                {title}
              </h5>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="hover:text-primary hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h5 className="text-lg font-bold uppercase mb-3 text-primary">
              Newsletter
            </h5>
            <p className="max-w-xs mx-auto md:mx-0">
              Stay updated on the latest news and events. Subscribe now!
            </p>
            <form className="mt-4 flex items-stretch justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 text-black rounded-sm max-w-sm"
              />
              <button className="px-4 bg-black/40 flex items-center justify-center active:scale-95">
                <AiOutlineSend />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary text-background py-1">
        <div className="container text-center flex flex-col md:flex-row justify-around items-center gap-2">
          <p>
            &copy; {new Date().getFullYear()} &nbsp;
            <Link href="/" className="hover:underline">
              NicoGauge
            </Link>
            . All Rights Reserved.
          </p>
          <ul className="grid grid-cols-3 gap-2 text-sm">
            {bottomLinks.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} className="hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
