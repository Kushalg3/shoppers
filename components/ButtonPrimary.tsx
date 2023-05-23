type props = {
  btnText: string;
};

const ButtonPrimary = ({ btnText }: props) => {
  return (
    <button className="w-20 h-7 text-sm font-semibold rounded-full bg-blue text-white hover:bg-[#004f9a] duration-300">
      {btnText}
    </button>
  );
};

export default ButtonPrimary;
