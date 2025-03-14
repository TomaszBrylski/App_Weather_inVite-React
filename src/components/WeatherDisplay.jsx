import PropTypes from "prop-types";

const WeatherDisplay = ({ weatherData, error }) => {
  if (error) {
    return (
      <div className="error" style={{ display: "block" }}>
        <p>Invalid city name</p>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather" style={{ display: "block" }}>
      <img
        src={`/images/${weatherData.weatherIcon}.png`}
        className="weather-icon"
        alt="weather icon"
      />
      <h1 className="temp">{weatherData.temp}°c</h1>
      <h2 className="city">{weatherData.city}</h2>
      <div className="details">
        <div className="col">
          <img src="/images/humidity.png" alt="humidity icon" />
          <div>
            <p className="humidity">{weatherData.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="/images/wind.png" alt="wind icon" />
          <div>
            <p className="wind">{weatherData.windSpeed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherDisplay.propTypes = {
  error: PropTypes.bool,
  weatherData: PropTypes.shape({
    temp: PropTypes.number,
    city: PropTypes.string,
    humidity: PropTypes.number,
    windSpeed: PropTypes.number,
    weatherIcon: PropTypes.string,
  }),
};

export default WeatherDisplay;
