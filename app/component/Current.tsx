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
  // Ensure data is defined and has necessary properties
  if (!data || !data.current || !data.location) {
    return null; // Or handle loading state or error state accordingly
  }

  const currentDate = getCurrentDate();
  const weatherIcon = data.current?.condition?.icon || '';
  const temp = data.current?.temp_f;
  const conditionText = data.current?.condition?.text || '';
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
      {temp !== undefined && (
        <div>
          <p className="text-5xl text-white">
            {temp.toFixed()}
            <span>°</span>
          </p>
          <span className="text-white">{conditionText}</span>
        </div>
      )}
      {locationName && locationRegion && (
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
          <IoLocationSharp />
          <span>
            {locationName}, {locationRegion}
          </span>
        </div>
      )}
    </div>
  );
};

export default Current;
