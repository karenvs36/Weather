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

  const currentDate = getCurrentDate();
  const weatherIcon = data.current?.condition?.icon || ''; // Use optional chaining
  const temp = data.current.temp_f; // temp_f is required based on your type definition
  const conditionText = data.current?.condition?.text || ''; // Use optional chaining
  const locationName = data.location.name;
  const locationRegion = data.location.region;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[50px] object-cover"
              src={weatherIcon}
              alt={conditionText}
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {temp.toFixed()}<span>°</span>
        </p>
        <span className="text-white">{conditionText}</span>
      </div>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
        <IoLocationSharp />
        <span>
          {locationName}, {locationRegion}
        </span>
      </div>
    </div>
  );
};

export default Current;
