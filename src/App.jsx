import { useState, useEffect } from 'react'

import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import MainCard from "./components/MainCard"
import TodaysForecast from "./components/TodaysForecast"
import AirConditions from "./components/AirConditions"
import SevenDayForecast from "./components/SevenDayForecast"

import dumb_data from './utils/dummy_data'
import { getCoordinates } from './utils/getLocation';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(dumb_data);
  const [air_condition_index, setAir_condition_index] = useState(0)

  const setCityData = async (query = 'Silchar', days = 7) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=86b8bce67ea8416686085652250506&q=${query}&days=${days}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCurrentWeatherData(data);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  useEffect(() => {
    const setData = async () => {
      const { lat, lon } = await getCoordinates();
      setCityData(`${lat},${lon}`);
    }
    setData();
  }, []);

  useEffect(() => {
    let element_index = currentWeatherData.forecast.forecastday[0].hour.findIndex((item) => {
      const hourPart = new Date(item.time).getHours();
      return hourPart === new Date().getHours();
    })
    setAir_condition_index(element_index);
  }, [currentWeatherData])


  const handleSearch = (searchTerm) => {
    setCityData(searchTerm);
    console.log(currentWeatherData)
  }

  if (!currentWeatherData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <img src="src\assets\loading.gif" alt="loading..." />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-900 flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Searchbar onSearch={handleSearch} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <MainCard city={currentWeatherData.location.name} region={currentWeatherData.location.region} country={currentWeatherData.location.country} temperature={currentWeatherData.current.temp_c} />

            <TodaysForecast hourlyData={currentWeatherData.forecast.forecastday[0].hour} />

            {<AirConditions
              feelslike_c={currentWeatherData.forecast.forecastday[0].hour[air_condition_index].feelslike_c}
              wind_kph={currentWeatherData.forecast.forecastday[0].hour[air_condition_index].wind_kph}
              chance_of_rain={currentWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}
              uv={currentWeatherData.forecast.forecastday[0].day.uv}
            />}

          </div>

          <div className="lg:col-span-1">
            <SevenDayForecast weeklyData={currentWeatherData.forecast.forecastday} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
