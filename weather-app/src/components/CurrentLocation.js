import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import ApiKey from './ApiKey';
import Clock from "react-live-clock";
import '../App.css';
const dataBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date},${day},${month},${year}`

};

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};
class Weather extends React.Component {

  state = {
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude)
        }).catch((err) => {
          this.getWeather(27.67, 77.28);
          alert("you have disable location service. Allow this App to accesss your location. your current location is used for calculating real time weather.")
        })
    }
    else {
      alert("Geolocation not avaliable");
    }

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon), 60000
    );
  }


  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getWeather = async (lat, lon) => {

    const api_call = await fetch(`${ApiKey.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${ApiKey.key}`);
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
    });
    console.log(data)
    switch (this.state.icon) {
      case "Haze":
        this.setState({ icon: "CLEAR_DAY" });
        break;
      case "Clouds":
        this.setState({ icon: "CLOUDY" });
        break;
      case "Rain":
        this.setState({ icon: "RAIN" });
        break;
      case "Snow":
        this.setState({ icon: "SNOW" });
        break;
      case "Dust":
        this.setState({ icon: "WIND" });
        break;
      case "Drizzle":
        this.setState({ icon: "SLEET" });
        break;
      case "Fog":
        this.setState({ icon: "FOG" });
        break;
      case "Smoke":
        this.setState({ icon: "FOG" });
        break;
      case "Tornado":
        this.setState({ icon: "WIND" });
        break;
      default:
        this.setState({ icon: "CLEAR_DAY" });
    }
  }
  render() {
    if (this.state.temperatureC) {
      return (
        <React.Fragment>
          <div className="liveContainer">
          <div className="city">
            <div className="title">
              <h2>{this.state.country}</h2>
              <h3>{this.state.city}</h3>
            </div>
            <div className="mb-icon">
              {" "}
              <ReactAnimatedWeather
                icon={this.state.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.defaults}
              />
              <p>{this.state.main}</p>
            </div>
            <div className="date-time">
              <div className="dmy"></div>
              <div id="txt"></div>
              <div className="current-time">
                <Clock format="HH:mm:ss" interval={1000} ticking={true} />
              </div>
              <div className="current-date">{dataBuilder(new Date())}</div>
            </div>
            <div className="temperature">
              <p>
                {this.state.temperatureC}°<span>C</span>
              </p>
            </div>
          </div>
          </div>
     
        </React.Fragment>
      );
    }
    else{
      return (
        <React.Fragment>
        {/* <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} /> */}
        <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
          Detecting your location
        </h3>
        <h3 style={{ color: "white", marginTop: "10px" }}>
          Your current location wil be displayed on the App <br></br> & used
          for calculating Real time weather.
        </h3>
      </React.Fragment>
      )
    }
  }

}
export default Weather;