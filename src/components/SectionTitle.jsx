import { CiLineHeight } from "react-icons/ci";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex gap-2.5 mb-6 md:mb-10 items-center text-black">
      <CiLineHeight className="opacity-70 dark:text-white" size={32} />
      <div>
        <h3 className="text-3xl syne-font uppercas md:text-5xl font-bold dark:text-white/95">
          {heading}
        </h3>
        <p className="max-sm:text-sm w-full md:w-140 text-[16px] mt-1.5 dark:text-white/80">
          {subHeading}
        </p>
      </div>
    </div>
  );
};
export default SectionTitle;
