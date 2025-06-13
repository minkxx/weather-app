const SevenDayForecast = ({ weeklyData }) => {

  return (
    <div className="bg-slate-700 rounded-2xl p-6 h-fit">
      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">7 Day Forecast</h3>
      <div className="space-y-4">
        {weeklyData && weeklyData.length > 0 ? (
          weeklyData.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-slate-600 last:border-b-0"
            >
              <div className="flex space-x-2">
                <span className="text-slate-300 text-sm font-medium mr-6">{day.date}</span>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                  <p className="text-white">{day.day.condition.text}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <span className="text-white font-medium">{day.day.maxtemp_c}°</span>
                  <span className="text-slate-400 ml-2">{day.day.mintemp_c}°</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-slate-400 text-center py-8">
            <p>No forecast data available</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SevenDayForecast
