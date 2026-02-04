import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const marker = document.getElementById("profile-end");
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Profile section শেষ হলে visible হবে
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollTop}
      aria-label="Back to top"
      className={`hidden md:flex backdrop-blur-sm fixed -bottom-16 right-6 lg:right-24 z-50 group w-12.5 h-12.5 items-center justify-center rounded-xl back-drop-b shadow-[0_0_0_4px_rgba(180,160,255,0.253)] overflow-hidden transition-all duration-500 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90 pointer-events-none"
        }
        hover:w-35 hover:rounded-[50px]
        hover:bg[rgb(181,160,255)]
      `}
    >
      {/* Icon */}
      <svg
        viewBox="0 0 384 512"
        className="w-3 text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-[200%]"
      >
        <path
          fill="currentColor"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>

      {/* Text */}
      <span
        className="
          absolute
          dark:text-white text-[0px] transition-all duration-300 group-hover:text-[12px]
        "
      >
        Back to Top
      </span>
    </button>
  );
};

export default BackToTopButton;
