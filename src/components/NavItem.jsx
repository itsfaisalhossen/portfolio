const NavItem = ({ item, toggleStatus, setToggleStatus, open, setOpen }) => {
  return (
    <div onClick={() => setOpen(!open)}>
      <a
        onClick={() => setToggleStatus(item.title)}
        className="relative lg:font-light lg:text-[16px] font-normal text-md  dark:text-white/95 transition-colors duration-300 group py-1"
        href={item.href}
      >
        <span className="flex items-center gap-2">
          <span className="hidden max-lg:block">
            {item.icon && <item.icon size={20} />}
          </span>
          {item.title}
        </span>
        <span
          className={`absolute bottom-0 rounded-full left-0 h-[2px] bg-base-content transition-all duration-300 w-0 group-hover:w-full ${
            toggleStatus == item.title ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </a>
    </div>
  );
};
export default NavItem;
