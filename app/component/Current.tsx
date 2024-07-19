import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";
import { WeatherData } from './types'; // Ensure the correct path

interface CurrentProps {
  data: WeatherData;
}

const Current = ({ data }: CurrentProps) => {
  if (!data.current) {
    return <div>Loading...</div>;
  }

  const { current, location } = data;
  if (!current) {
    return <div>No current weather data available</div>;
  }

  const { condition, temp_f } = current;
  const { icon, text } = condition;
  const currentDate = getCurrentDate();

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {icon && (
          <div>
            <img
              className="w-[50px] object-cover"
              src={icon}
              alt={text || 'Weather icon'}
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {temp_f.toFixed()}<span>°</span>
        </p>
        <span className="text-white">{text}</span>
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
