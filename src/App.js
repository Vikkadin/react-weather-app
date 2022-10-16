import { useEffect, useState } from 'react';
import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import Form from './components/Form'
// import Navigation from './components/Form'
import ForecastCard from './components/ForecastCard'
import DailyCard from './components/DailyCard'
import HourlyCard from './components/HourlyCard'
import getFormattedWeatherData from './ApiService'

function App() {
  console.log(window.location)
  const [query, setQuery] = useState({ q: "Kyiv" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => { setWeather(data); });
    };
    fetchWeather();
  }, [query, units]);


  return (
    <div className="container">
      <div className="content">
        <div className="form-container">
          <div className="name">
            <div className="logo"><a href="https://github.com/Vikkadin/weather-app-react">Open-source code</a> by Vika Kelii</div>
          </div>
          <div className="search">
            {weather && (
              <div className="city">
                <TimeAndLocation weather={weather} />
              </div>
            )}
            <h2>What is the weather today?</h2>
            <Form setQuery={setQuery} />
          </div>
        </div>
        <div className="info-container">
          {weather && (
            <div>
              <h1>Current Weather</h1>
              <ForecastCard weather={weather} />
              <h2 className="title">Hourly / Daily</h2>
              <div className="summary">
                <DailyCard items={weather.daily} />
                <HourlyCard items={weather.hourly} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}

export default App;
