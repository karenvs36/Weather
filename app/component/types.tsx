// types.ts
export interface Condition {
  icon: string;
  text: string;
}

export interface CurrentWeather {
  condition: Condition;
  temp_f: number;
  wind_mph: number; // Add this
  humidity: number; // Add this
  wind_dir: string; // Add this
  pressure_mb: number; // Add this
  feelslike_f: number; // Add this
  vis_km: number; // Add this
}

export interface Astro {
  sunrise: string;
  sunset: string;
}

export interface DayForecast {
  date: string;
  day: {
    condition: Condition;
    maxtemp_f: number;
    mintemp_f: number;
  };
  astro: Astro;
}

export interface WeatherData {
  current?: CurrentWeather;
  location: {
    name: string;
    region: string;
  };
  forecast?: {
    forecastday: DayForecast[];
  };
}
