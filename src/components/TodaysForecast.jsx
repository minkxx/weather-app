import TodayWeatherCard from "./util_components/TodayWeatherCard"

const TodaysForecast = ({ hourlyData }) => {
  return (
    <div className="bg-slate-700 rounded-2xl p-6 mb-6">
      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide border-b-2 border-blue-500 pb-2">
        Today's Forecast
      </h3>
      <div className="space-x-4 flex justify-around">
        {hourlyData.map((hour, index) => (
          [6, 9, 12, 15, 18, 21].includes(index) && (
            <TodayWeatherCard key={index} time={hour.time} icon_code={hour.condition.code} temp_c={hour.temp_c} />
          )
        ))}
      </div>
    </div>
  )
}

export default TodaysForecast
