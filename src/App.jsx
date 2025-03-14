import { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import {
  checkWeather,
  checkWeatherByLocation,
  getLocation,
} from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const processWeatherData = useCallback((data) => {
    setWeatherData({
      temp: Math.round(data.main.temp),
      city: data.name,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weatherIcon: getWeatherIcon(data.weather[0].main),
    });
    setError(false);
  }, []);

  const getWeatherIcon = (weatherMain) => {
    const iconMap = {
      Clouds: "clouds",
      Clear: "clear",
      Rain: "rain",
      Drizzle: "drizzle",
      Mist: "mist",
    };
    return iconMap[weatherMain] || "clear";
  };

  const handleSearch = useCallback(
    async (city) => {
      try {
        const data = await checkWeather(city);
        processWeatherData(data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(true);
        setWeatherData(null);
      }
    },
    [processWeatherData]
  );

  useEffect(() => {
    const initializeWeather = async () => {
      try {
        const { lat, lon } = await getLocation();
        const data = await checkWeatherByLocation(lat, lon);
        processWeatherData(data);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        handleSearch("Rheinberg");
      }
    };

    initializeWeather();
  }, [handleSearch, processWeatherData]);

  return (
    <div className="card">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} error={error} />
    </div>
  );
}

export default App;
