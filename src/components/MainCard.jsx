const MainCard = ({ city, region, country, temperature, weatherIcon }) => {
  return (
    <div className="bg-slate-700 rounded-2xl p-8 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{city}</h1>
          <p className="text-slate-400 text-lg mb-6">{region}, {country}</p>
          <div className="text-6xl font-semibold text-white">{temperature}° C</div>
        </div>
        <div className="flex-shrink-0">
          {/* Weather Icon */}
          <div className="w-32 h-32 relative">
            <div className="w-20 h-20 bg-yellow-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-yellow-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 50%",
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-50px)`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
