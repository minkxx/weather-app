const TodayWeatherCard = ({ time, icon_code, temp_c }) => {
    const formatTo12Hour = (time) => {
        const date = new Date(time);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/am|pm/, (match) => match.toUpperCase());
    };

    return (
        <div className='flex flex-col text-white font-semibold items-center space-y-1'>
            <p className="" >{formatTo12Hour(time)}</p>
            <img src="src\assets\clouds_img\heavy-rain.png" alt={icon_code} className="h-14" />
            <p className="text-xl" >{temp_c}°</p>
        </div>
    )
}

export default TodayWeatherCard
