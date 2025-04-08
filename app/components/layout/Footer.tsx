import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#cases" },
  { name: "Pricing", href: "#Testimonials" },
];

const logos = [
  { name: "Linkedin", src: "/IconLinkedin.svg", link: "https://facebook.com" },
  { name: "Facebook", src: "/IconFacebook.svg", link: "https://linkedin.com" },
  { name: "Twitter", src: "/IconTwitter.svg", link: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-dark">
      {/* Container for Logo, Links, and Social Media */}
      <div className="flex flex-col items-center w-full px-10 mt-12 gap-8">
        {/* Logo */}
        <div className="relative w-36 h-6">
          <Image src="/LogoFooter.svg" alt="Logo" fill />
        </div>

        {/* Navigation Links */}
        <nav className="text-center text-white">
          <ul className="flex flex-col">
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {logos.map(({ name, src, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center"
            >
              <Image src={src} alt={name} width={30} height={30} />
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col items-center text-white mt-9 text-center min-w-73 gap-3.5">
        <h1 className="bg-green rounded-sm text-black px-1.5">Contact Us:</h1>
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St<br />
          Moonstone City, Stardust State 12345
        </p>
      </div>

      {/* Newsletter Form */}
      <form className="flex flex-col rounded-md bg-[#292A32] p-8 mt-9">
        <input
          className="border-2 border-white rounded-2xl w-82 h-17 px-6 placeholder:text-white"
          placeholder="Email"
        />
        <button className="bg-green rounded-2xl font mt-5 w-82 h-17">
          Subscribe to news
        </button>
      </form>

      {/* Divider Line */}
      <div className="mt-9 px-5 w-full">
        <hr className="border-t border-white" />
      </div>

      {/* Copyright */}
      <p className="text-white mt-9">© 2023 Positivus. All Rights Reserved.</p>
      <p className="text-white">Privacy Policy</p>
    </footer>
  );
}
