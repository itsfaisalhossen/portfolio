import Container from "./Container";
import devImg from "../assets/programmer.gif";
import profileIcon from "../assets/profile_icon.webp";
import { MdOutlineFileDownload } from "react-icons/md";
import { MapPin } from "lucide-react";

const Profile = () => {
  return (
    <section>
      <div className="dark:text-white/85 minh-screen">
        <Container>
          <div className="flex items-center justify-between">
            <div className=" flex gap-2.5 items-center  back-drop-b rounded-lg py-2   px-2.5 md:px-3">
              <span className="relative flex size-3 ma:size-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex size-3 ma:size-4 rounded-full bg-green-400"></span>
              </span>
              <p className="font-medium text-xs md:text-sm">
                Available for Work
              </p>
            </div>
            <div className=" flex gap-2 items-center  back-drop-b rounded-lg py-2   px-2.5 md:px-3">
              <MapPin size={18} />
              <p className="font-medium text-xs md:text-sm">Dhaka Bangladesh</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5 mt-4 md:mt-6">
            <div className="back-drop-b rounded-xl md:w-[40%] w-full flex items-center justify-center max-sm:p-6">
              <img
                className="object-cover w-full h-full  md:w-55 md:h-55 rounded-xl opacity-90 grayscale"
                src={devImg}
              ></img>
            </div>
            <div className="md:w-[60%] p-3.5 md:p-5 w-full  back-drop-b   rounded-xl">
              <div className="md:flex justify-between itemscenter">
                <h3 className="space-font max-md:text-center flex flex-col  ">
                  <span className="md:text-lg mr-2">Hey there. I’m</span>
                  <span className="uppercase font-semibold space-font text-3xl md:text-4xl ">
                    Faisal Hossen
                  </span>
                </h3>
                <div className="hidden bg-white text-white  back-drop-b h-14 p-3.5 md:flex items-center   rounded-lg">
                  <img className="w-8 text-white" src={profileIcon} alt="" />
                </div>
              </div>
              <p className="font-normal text-sm/6  my-5 md:my-8">
                I craft user-friendly, responsive, and visually striking digital
                experiences that transform ideas into engaging, scalable, and
                high-performing web applications. Using
                <span className=" font-medium mx-1.5">
                  JavaScript, ReactJs, NextJs, TailwindCSS with the
                  'MERN-STACK'.
                </span>
                I specialize in combining sleek design with powerful
                functionality, delivering websites and apps that are intuitive,
                accessible, and future-ready. From smooth animations to secure
                backends, I ensure every project is optimized for performance,
                adaptability, and business growth.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <p
                  className="flex flex-col max-sm:w-full text-center items-center dark:text-white! text-xs
            py-2.5 px-5.5 uppercase  rounded-xl font-medium back-drop-b opacity-50 "
                >
                  {/* <IoMailUnreadOutline size={22} /> */}
                  Frontend-Focused
                  <span>Full Stack Web Developer (MERN)</span>
                </p>
                <a
                  href="https://drive.google.com/file/d/12ZVmCz1gh-ykoJwUwREZfoRI_cvVvD0q/view?usp=sharing"
                  target="_blank"
                  className="flex gap-2 cursor-pointer items-center dark:bg-white! dark:text-black!
            py-2 px-3.5  back-drop-b max-sm:w-full text-center justify-center rounded-lg font-medium text-xs md:text-sm  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ..."
                >
                  Download Resume
                  <div className="size-6 animate-bounce ...">
                    <MdOutlineFileDownload size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Profile;
