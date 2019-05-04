import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            city : "",
            state : "",
            weatherImg: "",
            forecast : [],
            condition : []
        };

        this.getWeatherForecast = this.getWeatherForecast.bind(this);
        this.getWeatherImage = this.getWeatherImage.bind(this);
    }

    componentDidMount(){
        //initalize with the default settings Vancouver, BC
        this.getWeatherForecast();
    }

    getWeatherForecast( location = "Vancouver,BC") {

        let info = location.split(',');

        console.log(info);

        // makes the api request
        axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + info[0] + '%2C%20' + info[1] + '%22%20)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then( (response) => {

                // info about today
                this.setState({condition : response.data.query.results.channel.item.condition});

                // set forecast from json for today and next days
                this.setState({forecast : response.data.query.results.channel.item.forecast});

                console.log(response.data);

            })
            .catch( (error) => {
                console.log(error);
            });
    }

    getWeatherImage( code ){
        return "http://l.yimg.com/a/i/us/we/52/" + code + ".gif";
    }


    render() {
        return (
            <div className="App">
                <h1>Weather-app</h1>
                <div id="options">
                    <p>Choose a city</p>
                    <select name="cityDropdown" id="cityDropdown" onChange={(e) => { this.getWeatherForecast( e.target.value )}}>
                        <option value="Vancouver,BC">Vancouver</option>
                        <option value="Rio de Janeiro,RJ">Rio de Janeiro</option>
                        <option value="Milan,LM">Milan</option>
                        <option value="Dusseldorf,NW">Dusseldorf</option>
                        <option value="Cape Town,ZA">Cape Town</option>
                    </select>
                </div>
                <div id="forecast">
                    <div className="forecastItem">{this.state.condition.date}</div>
                    <div className="forecastItem">{this.state.condition.temp} &#176;C</div>
                    <div className="forecastItem"><img src={this.getWeatherImage(this.state.condition.code)} alt=""/></div>
                </div>
                <div id="forecastNext">
                    <h3>Next days</h3>
                    <ul>
                        {this.state.forecast.map( (day) => {
                            return (
                              <li key={day.date}>
                                <div>{day.date}</div> -
                                <div>High {day.high} &#176;C</div> -
                                <div>Low {day.low} &#176;C</div> -
                                <div>{day.text}</div> -
                                <div><img src={this.getWeatherImage(day.code)} alt=""/></div>
                              </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}


export default App;
