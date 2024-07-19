// types.ts
export interface Condition {
  icon: string;
  text: string;
}

export interface CurrentWeather {
  condition: Condition;
  temp_f: number;
  wind_mph: number;
  humidity: number;
  wind_dir: string;
  pressure_mb: number;
  feelslike_f: number;
  vis_km: number;
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
