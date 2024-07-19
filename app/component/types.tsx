// types.ts
export interface Condition {
  icon: string;
  text: string;
}

export interface CurrentWeather {
  condition: Condition;
  temp_f: number;
}

export interface Location {
  name: string;
  region: string;
}

export interface DayForecast {
  date: string;
  day: {
    condition: Condition;
    maxtemp_f: number;
    mintemp_f: number;
  };
}

export interface WeatherData {
  current?: CurrentWeather; // This is optional
  location: Location;
  forecast?: {
    forecastday: DayForecast[];
  };
}
