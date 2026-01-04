const SkillCard = ({ tech }) => {
  return (
    <p className="dark:text-white text-sm transition-all px-3  py-1.5 bgbase-content rounded-lg font-medium md:font-normal  back-drop-b">
      {tech.name}
    </p>
  );
};
export default SkillCard;
