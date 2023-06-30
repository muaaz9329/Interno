import { ArrowRightIcon } from "@heroicons/react/24/outline";
type Props = {
  text: string;
  onClick: () => void;
  Type: "Primary" | "Large" | "Color";
  showIcon: boolean;
};

const Btn = ({ Type, onClick, showIcon, text }: Props) => {
  return (
    <button
      className={` ${
        Type === "Large" ? "py-5 px-12 text-lg" : "py-4 px-10 text-md"
      }
      ${
        Type === "Color" ? "bg-Primary-I " : " bg-Primary-II"
      } text-white rounded-xl font-Jost  m-3.5 flex justify-between items-center`}
      onClick={onClick}
    >
      {text}
      {showIcon && (
        <ArrowRightIcon
          className={`w-6 h-6 font-bold ms-2 ${
            Type === "Color" ? "text-Primary-II" : "text-Primary-I"
          } `}
        />
      )}
    </button>
  );
};
export default Btn;

// className={`w-4 h-4 ms-2 ${Type==="Primary" ? "text-Primary-II":""} `}
