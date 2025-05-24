import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
        { name: "Contact", href: "/contact" },
      ],
    },    {
      title: "Social",
      links: [
        { name: "GitHub", href: "https://github.com/aditi2911" },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/aditi-rajawat-372814247/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#080620] border-t border-white/10 text-white">
      <div className="relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
               
                <span className="text-xl font-bold">
                  <span className="text-[#00E5FF]">Aditi</span> Rajawat
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Frontend developer specializing in creating modern and
                responsive web applications with a focus on user experience and
                performance.
              </p>              <div className="flex space-x-4 text-gray-400">
                <a
                  href="https://github.com/aditi2911"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditi-rajawat-372814247//"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="mailto:aditirajawat2911@gmail.com"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-[#00E5FF] font-semibold mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h3 className="text-[#00E5FF] font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-4">Gwalior, India</p>
              <p className="text-gray-400">contact@aditirajawat2911.com</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Aditi Rajawat. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
