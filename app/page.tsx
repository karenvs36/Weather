'use client';
import Input from "@/app/component/Input";
import { useState } from "react";
import Current from "./component/Current";
import WeekForecast from "./component/WeekForecast";
import WeatherDetails from "./component/WeatherDetails";
import Link from "next/link";
import { WeatherData } from './component/types'; // Ensure the correct path

const Home = () => {
  const [data, setData] = useState<WeatherData>({
    location: { name: '', region: '' }, // Default value with empty strings
    current: { 
      condition: { icon: '', text: '' },
      temp_f: 0,
      wind_mph: 0,
      humidity: 0,
      wind_dir: '',
      pressure_mb: 0,
      feelslike_f: 0,
      vis_km: 0
    },
    forecast: undefined // Set the initial value to undefined to match the WeatherData type
  });
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

{/*    const url = `http://api.weatherapi.com/v1/forecast.json?key=b4acc038d1e7459c95514127242006&q=${location}&days=7&aqi=yes&alerts=yes`;
 */}
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const fetchedData = await response.json();
        setData({
          location: fetchedData.location,
          current: {
            condition: fetchedData.current.condition,
            temp_f: fetchedData.current.temp_f,
            wind_mph: fetchedData.current.wind_mph,
            humidity: fetchedData.current.humidity,
            wind_dir: fetchedData.current.wind_dir,
            pressure_mb: fetchedData.current.pressure_mb,
            feelslike_f: fetchedData.current.feelslike_f,
            vis_km: fetchedData.current.vis_km,
          },
          forecast: fetchedData.forecast // Ensure this matches the WeatherData type
        });
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({
          location: { name: '', region: '' },
          current: { 
            condition: { icon: '', text: '' }, 
            temp_f: 0, 
            wind_mph: 0, 
            humidity: 0, 
            wind_dir: '', 
            pressure_mb: 0, 
            feelslike_f: 0, 
            vis_km: 0 
          },
          forecast: undefined // Ensure forecast is handled correctly
        });
      }
    }
  };
  

  let content;
  if (data.location.name === '' && error === "") {
    content = (
      <div className="text-white text-center mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecasts</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City Not Found</p>
        <p className="text-xl">Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <div>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen h-auto">
      <div className="bg-white/25 w-full flex flex-col min-h-screen h-auto">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <Link href="/">
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold cursor-pointer">
              Weather App.
            </h1>
          </Link>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
