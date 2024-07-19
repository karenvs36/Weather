// MainComponent.tsx
import Current from './Current';
import WeekForecast from './WeekForecast';
import { WeatherData } from './types'; // Ensure the correct path

const MainComponent = () => {
  const data: WeatherData = {
    current: {
      condition: {
        icon: "https://example.com/icon.png",
        text: "Sunny"
      },
      temp_f: 75.0,
      wind_mph: 5.0, // Add this
      humidity: 60, // Add this
      wind_dir: "N", // Add this
      pressure_mb: 1015, // Add this
      feelslike_f: 74.0, // Add this
      vis_km: 10 // Add this
    },
    location: {
      name: "City",
      region: "Region"
    },
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
          },
          astro: {
            sunrise: "05:00 AM",
            sunset: "08:00 PM"
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
