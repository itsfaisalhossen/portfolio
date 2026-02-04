import Tilt from "react-parallax-tilt";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const ProjectCard = ({ sProject }) => {
  const { title, image, liveLink, githubLink, technologies } = sProject;

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
          <div className="text-xs font-extralight flex gap-1.5 flex-wrap mt-3">
            {technologies.map((tgs, idx) => (
              <p
                key={idx}
                className="border border-black/10 dark:border-white/20 backdrop-blur-xl px-1.5 py-0.5 rounded-md"
              >
                {tgs}
              </p>
            ))}
          </div>
          {/* <p className="text-sm">{description}</p> */}
          <div></div>
          <div className="mt-8 flex justify-between opacity-70">
            <a
              className="rounded-xl back-drop-b px-2.5 py-1.5 text-sm flex items-center gap-2 "
              href={liveLink}
              target="_blank"
            >
              Live <SquareArrowOutUpRight size={16} />
            </a>
            <a
              className="rounded-lg back-drop-b px2.5 p-1.5 text-xs flex items-center gap-2 "
              href={githubLink}
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
