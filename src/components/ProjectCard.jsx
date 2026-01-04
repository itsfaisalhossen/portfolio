import Tilt from "react-parallax-tilt";

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
        </div>
      </div>
    </Tilt>
  );
};
export default ProjectCard;
