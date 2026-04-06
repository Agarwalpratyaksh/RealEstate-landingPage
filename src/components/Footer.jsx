import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-orange-950 border-t border-orange-900 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="lg:pr-6">
            <h3 className="text-white text-2xl font-extrabold tracking-tight mb-4">
              Eastate
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Finding your perfect home has never been easier. We provide a
              seamless, transparent, and comprehensive real estate experience
              across India.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-orange-300 hover:bg-orange-300 hover:text-white transition-colors"
              >
                <img src={Facebook} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-orange-300 hover:bg-orange-300 hover:text-white transition-colors"
              >
                <img src={Twitter} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-orange-300 hover:bg-orange-300 hover:text-white transition-colors"
              >
                <img src={instagram} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-orange-300 hover:bg-orange-300 hover:text-white transition-colors"
              >
                <img src={linkedin} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Buy a Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Rent a Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Sell Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Real Estate Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              
              <li>
                <Link
                  to="/refund"
                  className="text-white/60 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/contact">
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider hover:text-orange-300 transition-colors cursor-pointer">
                Contact Us
              </h4>
            </Link>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-white/60 text-sm leading-relaxed">
                  BHA Millenium Tower Sector 62 
                  <br />
                  Noida , 201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/60 text-sm">+91 9168805979</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={mail} className="w-4 h-4  text-orange-300 shrink-0" />

                <span className="text-white/60 text-sm">
                  query@sarvmanglaminvestors.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm text-center md:text-left">
            © {new Date().getFullYear()} Eastate . All rights reserved. Not
            officially operated.
          </p>
          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
              alt="Paypal"
              className="h-6 opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
              alt="Mastercard"
              className="h-6 opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
              alt="Visa"
              className="h-6 opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
