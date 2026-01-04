import {
  Mail,
  Phone,
  MapPin,
  Github,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";

const Footer = () => {
  return (
    <footer id="contact">
      <Container>
        {/* Section Heading */}
        <SectionTitle heading={"Start a Conversation"} subHeading={""} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Left Side: Contact Info */}
          <div className="rounded-xl p-5 lg:p-8 md:p-6 back-drop-b bg-primary dark:bg-primary-dark">
            <h2 className="text-2xl dark:text-white font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin
                  className=" text-black dark:text-white mt-1"
                  size={20}
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Location
                  </p>
                  <p className="dark:text-gray-300 text-black text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className=" text-black dark:text-white mt-1" size={20} />
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Phone
                  </p>
                  <p className="dark:text-gray-300 text-black text-sm">
                    +8801775352158
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className=" text-black dark:text-white mt-1" size={20} />
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Email
                  </p>
                  <p className="dark:text-gray-300 text-black text-sm">
                    itsfaisalhossen@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t dark:border-gray-500 border-black/30">
              <p className="text-sm uppercase tracking-wider mb-4 text-black dark:text-gray-300">
                Find me on
              </p>
              <div className="flex gap-4">
                <div className="p-3  bg-gray-100 dark:bg-primary-dark dark:text-white rounded-lg cursor-pointer dark:hover:bg-primary hover:bg-red-100 hover:text-black [#251b4a] transition-colors">
                  <Github size={20} />
                </div>
                <div className="p-3  bg-gray-100 dark:bg-primary-dark dark:text-white rounded-lg cursor-pointer dark:hover:bg-primary hover:bg-red-100 hover:text-black [#251b4a] transition-colors">
                  <Facebook size={20} />
                </div>
                <div className="p-3  bg-gray-100 dark:bg-primary-dark dark:text-white rounded-lg cursor-pointer dark:hover:bg-primary hover:bg-red-100 hover:text-black [#251b4a] transition-colors">
                  <Linkedin size={20} />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className="rounded-xl p-5 lg:p-8 md:p-6 back-drop-b bg-primary dark:bg-primary-dark">
            <form className="space-y-4 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full back-drop-b dark:text-white rounded-lg p-3 outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full back-drop-b dark:text-white rounded-lg p-3 outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full back-drop-b dark:text-white rounded-lg p-3 outline-none focus:border-purple-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                required
                rows="6"
                className="w-full back-drop-b text-black dark:text-white rounded-lg p-3 outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>

              <button className="w-full mt-8 back-drop-b p-3 dark:bg-white rounded-lg flex items-center justify-center gap-2 font-semibold text-black dark:text-white">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="py-12 w-[320px] flex mx-auto items-center opacity-40 justify-center">
          <p className="text-center dark:text-white/40 text-xs back-drop-b p-2.5 px-3.5 rounded-full">
            All right recived by faisalhossen
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
