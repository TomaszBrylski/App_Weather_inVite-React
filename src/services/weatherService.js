const apiKey = "8e46f01443dcff88b2e68d5e19142605";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    throw new Error("City not found");
  }
  return await response.json();
};

export const checkWeatherByLocation = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  if (response.status === 404) {
    throw new Error("Location not found");
  }
  return await response.json();
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};
