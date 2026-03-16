import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      toast.success("Email sent successfully!.", {
        style: {
          border: "1px solid #858585",
          padding: "8px 8px",
          background: "#0d0117",
          color: "#dedede",
        },
        iconTheme: {
          primary: "#0d0117",
          secondary: "#858585",
        },
      });
      e.target.reset();
    } catch (error) {
      console.error("Email failed:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <Container>
        {/* Section Heading */}
        <SectionTitle
          heading={"Start a Conversation"}
          subHeading={
            "Have a project in mind or want to collaborate? Fill in the form or reach out directly — I'll get back to you within 24 hours."
          }
        />
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left Side: Contact Info */}
          <div className="rounded-xl flex flex-col justify-between w-full md:w-[40%] p-5 md:p-6 back-drop-b">
            <div>
              <h2 className="text-3xl md:text-4xl syne-font text-gradient-vibrant dark:text-white/90 font-bold mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin
                    className=" text-black dark:text-white mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-white/90">
                      Location
                    </p>
                    <p className="dark:text-gray-300 text-black text-sm">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone
                    className=" text-black dark:text-white mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-white/90">
                      Phone
                    </p>
                    <p className="dark:text-gray-300 text-black text-sm">
                      +8801775352158
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail
                    className=" text-black dark:text-white mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-white/90">
                      Email
                    </p>
                    <p className="dark:text-gray-300 text-black text-sm">
                      itsfaisalhossen@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <p className="text-sm uppercase tracking-wider mb-6 text-black font-medium dark:text-gray-200">
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
                    size={20}
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
                    size={20}
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
                    size={20}
                    className="transition-all opacity-70 duration-500 group-hover:scale-90 group-hover:rotate-360 group-hover:fill-[#333]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-xl w-full md:w-[60%] p-5 md:p6 back-drop-b">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 flex flex-col justify-between"
            >
              <div className="grid grid-cols-1 sm:grid-cols2 gap-4">
                <div className="flex flex-col md:flex-row gap-3 justify-between">
                  <div className="w-full">
                    <p className="text-black mb-1.5 uppercase dark:text-white/90 text-sm">
                      Full Name *
                    </p>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Jhon Doe"
                      required
                      className="w-full back-drop-b dark:text-white rounded-lg text-sm py-3 px-2 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-black mb-1.5 uppercase dark:text-white/90 text-sm">
                      Email Address *
                    </p>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="you@example.com"
                      required
                      className="w-full back-drop-b dark:text-white rounded-lg text-sm py-3 px-2 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-black mb-1.5 uppercase dark:text-white/90 text-sm">
                  Subject *
                </p>
                <input
                  type="subject"
                  name="subject"
                  placeholder="Project inquiry / Collaboration..."
                  required
                  className="w-full back-drop-b dark:text-white rounded-lg text-sm py-3 px-2 outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <p className="text-black mb-1.5 uppercase dark:text-white/90 text-sm">
                  Message *
                </p>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  name="message"
                  required
                  rows="6"
                  className="w-full dark:text-white back-drop-b placeholder:text-gray-500 dark:placeholder:text-white/60 rounded-lg text-sm py-2.5 px-2 outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer mt-8 back-drop-b p-3 dark:bg-white rounded-lg flex items-center justify-center gap-2 font-semibold text-black dark:text-white syne-font"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="py-12 w-[320px] flex mx-auto items-center opacity-60 justify-center">
          <p className="text-center dark:text-white/60 text-xs back-drop-b p-2.5 px-3.5 rounded-full">
            © 2026 Faisal Hossen. All rights reserved.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
