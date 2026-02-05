import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Get Involved", href: "#" },
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/14SWuXp4849/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/PUNYAMFOUN108", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/punyamfoundation?igsh=MXNvM2hsMW9sbXAybQ==", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/punyam-foundation-1856102a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-lg">Punyam Foundation</p>
              </div>
            </div>
            <p className="hindi-text text-2xl text-primary-foreground/90 mb-2">
              सेवा परमो धर्मः
            </p>
            <p className="text-sm text-primary-foreground/70">
              Service is the Supreme Duty
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <p className="leading-relaxed">J-12/5 Flat No. G-01, Virat Garden, Nati Imli, Varanasi - 221001 (UP) India</p>
              <p>Email: punyamfoundation@gmail.com</p>
              <p>Phone: +91 7398799789</p>
              <div className="pt-2 border-t border-primary-foreground/10 mt-2">
                <p className="text-xs">Trust Regn. No. 324/2023</p>
                <p className="text-xs">Niti Ayog Regn. No. UP/2024/0450696</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Punyam Foundation. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary" /> for humanity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
