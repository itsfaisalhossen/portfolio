const StarBackground = ({ children }) => {
  return (
    <div className="star-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* Your app content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBackground;
