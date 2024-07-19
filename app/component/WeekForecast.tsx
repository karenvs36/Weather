import Current from "./Current";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface WeatherData {
  forecast: {
    forecastday: DayForecast[];
  };
}

interface WeekForeCastProps {
  data: WeatherData;
}

const WeekForecast = ({ data }: WeekForeCastProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full'>
      {data.forecast.forecastday.map((day, index) => (
        <div key={index} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
          <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>H {day.day.maxtemp_f.toFixed(0)}°</p>
            <p>L {day.day.mintemp_f.toFixed(0)}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example of using the WeekForecast component
const MainComponent = () => {
  // Example data structure
  const data: WeatherData = {
    forecast: {
      forecastday: [
        {
          date: "2024-07-18",
          day: {
            condition: {
              icon: "https://example.com/icon.png",
              text: "Sunny"
            },
            maxtemp_f: 75.0,
            mintemp_f: 65.0
          }
        },
        // Add more days as needed
      ]
    }
  };

  return (
    <div className="flex md:flex-row flex-col p-12 items-center justify-between">
      <Current data={data} />
      <WeekForecast data={data} />
    </div>
  );
};

export default MainComponent;
