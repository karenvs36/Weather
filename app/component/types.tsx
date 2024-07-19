// types.ts
export interface DayForecast {
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

export interface WeatherData {
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
  forecast?: {  // Make forecast optional
    forecastday: DayForecast[];
  };
}
