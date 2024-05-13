import styled from "styled-components"
// import { AllWeatherForecasts } from "./forecasts/allWeatherForecasts"
import { SummaryTab } from "./summaryView/summaryTab"
import { LocationSearch } from "./search/searchBar"
import { useState } from "react";
import { API_KEY, forecastApiUrl, currentWeatherApiUrl } from "../api/api";
import { HourlyForecast } from "./forecasts/hourlyForecast";
import { DailyForecast } from "./forecasts/dailyForecast";

export const Dashboard = () => {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastWeather, setForecastWeather] = useState(null)

    const handleOnSearchChange = async (data: { value: string, label: string }) => {
        const [latitude, longitude] = data?.value.split(" ") 

        const currentWeatherFetch = await fetch(`${currentWeatherApiUrl}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        const forecastWeatherFetch = await fetch(`${forecastApiUrl}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)  


        Promise.all([currentWeatherFetch, forecastWeatherFetch])
        .then(async(response) => {
            const currentWeatherResponse = await response[0].json(); 
            const forecastWeatherResponse = await response[1].json(); 

            setCurrentWeather({city: currentWeatherResponse.name , ...currentWeatherResponse })
            setForecastWeather({city: currentWeatherResponse.name , ...forecastWeatherResponse})
        })

        .catch((error) => console.log(error)); 
    }

    return (
        <Container>
            <LocationSearch onSearchChange={handleOnSearchChange} />
            {currentWeather && <SummaryTab currentWeatherData={currentWeather}/>}
            {forecastWeather && <HourlyForecast forecastWeatherData={forecastWeather}/>}
            {forecastWeather && <DailyForecast forecastWeatherData={forecastWeather}/>}
        </Container>
    )
}

const Container = styled.div`
display: grid; 
grid-template-rows: 0.1fr 0.3fr 0.6fr;
grid-template-areas: 
"nav nav nav nav"
"summary summary summary summary"
"main main main main"
"footer footer footer footer";
text-align: center; 
grid-gap: 0.25rem;
background: linear-gradient(360deg, #ffffff 0%, #335c81 74%);
`