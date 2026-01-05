import Tilt from "react-parallax-tilt";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ sProject }) => {
  const { title, image } = sProject;
  return (
    <Tilt
      glareEnable={true}
      glarePosition="bottom"
      glareBorderRadius="20px"
      glareMaxOpacity={0.8}
    >
      <div className="text-black back-drop-b dark:text-white/90 flex flex-col justify-between gap-5 h-full w-full p-3 rounded-xl">
        <img
          className="object-cover w-full h-52 rounded-lg grayscale bg-gray-50"
          src={image ? image : "N/A"}
          alt="Ui Kit"
        />
        <div>
          <h1 className="text-[16px] font-normal">{title}</h1>
          {/* <p className="text-sm">{description}</p> */}
          <div className="mt-8 flex justify-between gap-8 opacity-70">
            <a
              className="rounded-xl back-drop-b px-2.5 py-1.5 text-sm flex items-center gap-2 "
              href="https://itsfaisalhossen.github.io/portfolio/"
              target="_blank"
            >
              Live <SquareArrowOutUpRight size={16} />
            </a>
            <a
              className="rounded-lg back-drop-b px2.5 p-1.5 text-xs flex items-center gap-2 "
              href="https://github.com/itsfaisalhossen"
              target="_blank"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
export default ProjectCard;
