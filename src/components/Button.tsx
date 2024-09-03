const Button = ({
  children,
  buttonType,
  buttonColor,
}: {
  children: React.ReactNode;
  buttonType?: "button" | "submit";
  buttonColor?: string;
}) => {
  return (
    <button
      type={buttonType ? buttonType : "button"}
      style={{ background: buttonColor }}
      className={`w-full h-[40px] text-center  bg-[#4e3f3f] hover:bg-[#423838]  text-white rounded-md  cursor-pointer transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
