# 🌤️ Weather App

A beautiful and interactive weather application that provides real-time weather information for any city worldwide with stunning visuals and smooth animations.

## ✨ Features

- **Real-time Weather Data**: Fetches live weather information using OpenWeatherMap API
- **City Search**: Search weather for any city worldwide with Enter key or click functionality
- **Dynamic Weather Icons**: Automatically changes icons based on weather conditions (Clear, Clouds, Rain, Drizzle, Mist)
- **Detailed Information**: Displays temperature, humidity, wind speed, and city name
- **Error Handling**: Shows user-friendly error message for invalid city names
- **Responsive Design**: Beautiful gradient card design that works on all screen sizes
- **Stunning Background**: Eye-catching background image with glassmorphism effects
- **Auto-clear Input**: Automatically clears search input after successful search

## 🚀 Technologies Used

- **HTML5** for semantic structure
- **CSS3** with gradients, flexbox, and responsive design
- **JavaScript** with async/await for API calls
- **OpenWeatherMap API** for real-time weather data
- **CSS Media Queries** for mobile responsiveness

## 🎯 How It Works

The app uses the OpenWeatherMap API to fetch weather data:

1. User enters a city name in the search input
2. JavaScript makes an async API call to OpenWeatherMap
3. Weather data is parsed and displayed with appropriate icons
4. Error handling shows message for invalid cities
5. Input field clears automatically after successful search

## 🎨 Design Highlights

- **Gradient Background**: Beautiful teal to purple gradient card design
- **Glassmorphism UI**: Semi-transparent elements with modern styling
- **Dynamic Icons**: Weather-specific icons that change based on conditions
- **Centered Layout**: Perfect card positioning for all screen sizes
- **Typography**: Clean Gill Sans font family for readability

## 🛠️ Project Structure

```
├── index.html       # Main HTML structure
├── style.css        # Complete styling and responsive design
├── script.js        # JavaScript functionality and API integration
└── images/          # Weather icons and background assets
    ├── search.png
    ├── clear.png
    ├── clouds.png
    ├── rain.png
    ├── drizzle.png
    ├── mist.png
    ├── humidity.png
    ├── wind.png
    └── background.jpg
```

## 💡 API Integration

- **OpenWeatherMap API**: Free weather data service
- **API Key**: Secure key management for weather data access
- **Error Handling**: 404 status code handling for invalid cities
- **Data Parsing**: JSON response parsing for weather information
- **Units**: Metric system (Celsius, km/h) for temperature and wind speed

## 🎮 User Experience

The app provides an intuitive weather checking experience with:
- Simple search interface with placeholder text
- Enter key and button click functionality
- Immediate visual feedback with weather icons
- Clear error messages for invalid inputs
- Automatic input clearing after successful searches

Perfect for:
- Learning API integration with JavaScript
- Understanding async/await patterns
- Practicing responsive design techniques
- Building interactive web applications

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/keval06/weather-app

# Navigate to project directory
cd weather-app

# Get API key from OpenWeatherMap
# Visit: https://openweathermap.org/api
# Replace API key in script.js

# Open in browser
open index.html
```

## 🔑 API Configuration

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the API key in `script.js`:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## 📱 Browser Compatibility

Works perfectly on all modern browsers with support for:
- ES6+ JavaScript features (async/await)
- CSS3 gradients and flexbox
- Fetch API for HTTP requests
- Responsive design and media queries

## 🎯 Weather Conditions Supported

- **Clear**: Sunny/clear weather with sun icon
- **Clouds**: Cloudy conditions with cloud icon
- **Rain**: Rainy weather with rain icon
- **Drizzle**: Light rain with drizzle icon
- **Mist**: Misty/foggy conditions with mist icon

---

*Built with ❤️ using Vanilla JavaScript and OpenWeatherMap API*