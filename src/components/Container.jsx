const Container = ({ children }) => {
  return (
    <div className="lg:max-w-[960px] px-5 lg:px-0 w-full mx-auto">
      {children}
    </div>
  );
};
export default Container;
