import './App.css';
import TimeAndLocation from './components/TimeAndLocation';
import Form from './components/Form'
import Navigation from './components/Form'
import ForecastCard from './components/ForecastCard'
import DailyCard from './components/DailyCard'
import HourlyCard from './components/HourlyCard'
import ApiService from './ApiService';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="form-container">
          <div className="name">
            <div className="logo"><a href="https://github.com/Vikkadin/weather-app-react">Open-source code</a> by Vika Kelii</div>
          </div>
          <div className="search">
            <div className="city">
              <TimeAndLocation />
            </div>
            <h2>What is the weather today?</h2>
            <Form />
          </div>
        </div>
        <div className="info-container">
          <Navigation />
          <div>
            <h1>Current Weather</h1>
            <ForecastCard />
            <ApiService />
            <h2 className="title">Hourly / Daily</h2>
            <div className="summary">
              <DailyCard />
              <HourlyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;