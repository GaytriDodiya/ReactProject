import axios from "axios";
import { useState,useEffect } from "react";
import ApiKey from "./ApiKey";
import '../App.css';

export default function Forcast() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  const search = (city) => {
    const cityname = query || city
    axios.get(`${ApiKey.base}weather?q=
        ${cityname}&APPID=${ApiKey.key}`)
      .then((Response) => {
        console.log(Response)
        setWeather(Response.data);
        setQuery("");
      })
      .catch(function (error) {
        console.log(error);
        setQuery("");
        setWeather("");
        setError({ message: "Not Found", query: query });
      });
  };

  // function checkTime(i) {
  //     if (i < 10) i = "0" + i
  //     return i;
  // }

  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };


  useEffect(() => {
    search("delhi");
  }, [])

  return (
    <>
      <div className="forcast">
        <div className="today-weather">
          <div className="search-box">
            <input type="text"
              className="search-bar"
              placeholder="Search Any City"
              onChange={(e) => setQuery(e.target.value)}
              value={query} />

            <div className="img-box">
              <img src="https://images.avishkaar.cc/workflow/newhp/search-white.png" onClick={search}  alt="search_icon" />
            </div>
          </div>
          <ul>
            {typeof weather.main != "undefined" ? (
              <div>
                {" "}
                <li className="cityHead">
                  <p>
                    {weather.name}, {weather.sys.country}
                  </p>
                  <img
                    className="temp" alt="img"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
                  />
                </li>
                <hr/>
                <li>
                  Temperature{" "}
                  <span className="temp">
                    {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                  </span>
                </li>
                <hr/>
                <li>
                  Humidity{" "}
                  <span className="temp">
                    {Math.round(weather.main.humidity)}%
                  </span>
                </li>
                <hr/>
                <li>
                  Visibility{" "}
                  <span className="temp">
                    {Math.round(weather.visibility)} mi
                  </span>
                </li>
                <hr/>
                <li>
                  Wind Speed{" "}
                  <span className="temp">
                    {Math.round(weather.wind.speed)} Km/h
                  </span>
                </li>
              </div>
            ) : (
              <li>
                {error.query} {error.message}
              </li>
            )}
          </ul>
        </div>

      </div>
    </>
  )
}