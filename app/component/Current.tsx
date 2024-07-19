import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  // Check if 'data' or 'data.current' is undefined
  if (!data || !data.current) {
    return <div>Loading...</div>; // Or handle loading state as needed
  }

  // Destructure data object
  const { current, location } = data;

  // Destructure current object
  const { condition, temp_f } = current!; // 'current' is ensured to exist here due to earlier check

  // Destructure condition object
  const { icon, text } = condition;

  // Format current date
  const currentDate = getCurrentDate();

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {icon && ( // Use 'icon' instead of 'weatherIcon'
          <div>
            <img
              className="w-[50px] object-cover"
              src={icon}
              alt={text} // Use 'text' instead of 'conditionText'
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {temp_f.toFixed()}<span>°</span>
        </p>
        <span className="text-white">{text}</span> {/* Use 'text' for condition text */}
      </div>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
        <IoLocationSharp />
        <span>
          {location.name}, {location.region}
        </span>
      </div>
    </div>
  );
};

export default Current;
