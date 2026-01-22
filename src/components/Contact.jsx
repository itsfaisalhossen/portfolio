import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
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

            <div className="mt-16">
              <p className="text-sm uppercase tracking-wider mb-6 text-black font-medium dark:text-gray-300">
                Find me on
              </p>

              <div className="flex gap-4 md:gap-6">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/itsfaisalhossen/"
                  className=" grid place-items-center bg-primary/80 p-1.5 rounded-[10px] cursor-pointer border border-transparent transition-all duration-500 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-black/10 hover:translate-y-2 group
      "
                >
                  <FaLinkedin
                    size={25}
                    className="transition-all opacity-70 duration-500 group-hover:scale-90 group-hover:rotate-360 group-hover:fill-[#333]"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/itsfaisalhossen/"
                  className=" grid place-items-center bg-primary/80 p-1.5 rounded-[10px] cursor-pointer border border-transparent transition-all duration-500 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-black/10 hover:translate-y-2 group
      "
                >
                  <FaFacebookSquare
                    size={25}
                    className="transition-all opacity-70 duration-500 group-hover:scale-90 group-hover:rotate-360 group-hover:fill-[#333]"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/itsfaisalhossen"
                  className=" grid place-items-center bg-primary/80 p-1.5 rounded-[10px] cursor-pointer border border-transparent transition-all duration-500 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15),-6px_-6px_10px_-1px_rgba(255,255,255,0.7)] hover:shadow-[inset_4px_4px_6px_-1px_rgba(0,0,0,0.2),inset_-4px_-4px_6px_-1px_rgba(255,255,255,0.7),-0.5px_-0.5px_0px_rgba(255,255,255,1),0.5px_0.5px_0px_rgba(0,0,0,0.15),0px_12px_10px_-10px_rgba(0,0,0,0.05)] hover:border-black/10 hover:translate-y-2 group
      "
                >
                  <FaGithubSquare
                    size={25}
                    className="transition-all opacity-70 duration-500 group-hover:scale-90 group-hover:rotate-360 group-hover:fill-[#333]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-xl p-5 lg:p-8 md:p-6 back-drop-b bg-primary">
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
                className="w-full back-drop-b bg-white dark:bg-[#0f0f1a] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white rounded-lg p-3 outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>

              <button className="w-full mt-8 back-drop-b p-3 dark:bg-white rounded-lg flex items-center justify-center gap-2 font-semibold text-black dark:text-white">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="py-12 w-[320px] flex mx-auto items-center opacity-60 justify-center">
          <p className="text-center dark:text-white/60 text-xs back-drop-b p-2.5 px-3.5 rounded-full">
            All right recived by faisal-hossen
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
