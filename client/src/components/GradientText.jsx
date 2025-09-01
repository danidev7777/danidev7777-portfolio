export default function GradientText({
  children,
  className = "w-full",
  colors = [], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {/* {showBorder && <div className="" style={gradientStyle}></div>} */}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
