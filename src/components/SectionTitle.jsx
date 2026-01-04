import { CiLineHeight } from "react-icons/ci";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex gap-2.5 mb-10 items-center text-black dark:text-white/90">
      <CiLineHeight className="opacity-70" size={32} />
      <div>
        <h3 className="text-xl uppercase md:text-4xl font-bold tracking-widest">
          {heading}
        </h3>
        <p className="max-sm:text-xs text-[15px] mt-1.5">{subHeading}</p>
      </div>
    </div>
  );
};
export default SectionTitle;
