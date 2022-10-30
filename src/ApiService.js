import { DateTime } from "luxon";

const API_KEY = "8ff5d1a1376b46b7fe89092d7988204d";
const APP_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(APP_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    const res = await fetch(url);
    return await res.json();
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, temp_min, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        temp_min,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 7).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        };
    });

    hourly = hourly.slice(1, 7).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "h:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon,
        };
    });

    return { timezone, daily, hourly };
};


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};


const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;


export { formatToLocalTime, iconUrlFromCode };

