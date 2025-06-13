const AirConditions = ({ feelslike_c, wind_kph, chance_of_rain, uv }) => {
  const conditions = [
    { label: "Real Feel", value: feelslike_c || "--", unit: "°" },
    { label: "Wind", value: wind_kph || "--", unit: " km/h" },
    { label: "Chance of Rain", value: chance_of_rain || "0", unit: "%" },
    { label: "UV Index", value: uv || "0", unit: "" },
  ]

  return (
    <div className="bg-slate-700 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Air Conditions</h3>
      <div className="grid grid-cols-2 gap-4">
        {conditions.map((condition, index) => (
          <div key={index} className="bg-slate-600 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-slate-400 text-xs uppercase tracking-wide">{condition.label}</span>
            </div>
            <div className="text-white text-xl font-semibold">
              {condition.value}
              {condition.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AirConditions
