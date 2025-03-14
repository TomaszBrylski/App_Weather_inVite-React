# Weather App React

A modern weather application built with React that shows current weather conditions for any city in the world.

## Features

- Search weather by city name
- Automatic location detection
- Display current temperature
- Show humidity and wind speed
- Dynamic weather icons
- Error handling for invalid cities
- Responsive design

## Technologies Used

- React
- Vite
- OpenWeather API
- CSS3
- Vitest & React Testing Library for testing

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
```

2. Install dependencies:

```bash
cd REPOSITORY-NAME
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:

```
VITE_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Testing

The application uses Vitest and React Testing Library for testing. The test suite includes:

### Component Tests

- **SearchBar Tests:**

  - Input and button rendering
  - Search functionality on Enter key press
  - Search functionality on button click
  - Input validation (alphabetic characters only)

- **WeatherDisplay Tests:**
  - Weather information display
  - Error message handling
  - Conditional rendering
  - Weather icons display

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Usage

- Type a city name in the search bar
- Press Enter or click the search button
- View the current weather conditions
- The app will initially try to get weather for your current location

## API Reference

This project uses the [OpenWeather API](https://openweathermap.org/api) for weather data.

## License

This project is open source and available under the [MIT License](LICENSE).
