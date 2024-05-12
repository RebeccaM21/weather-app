import styled from "styled-components"
import { AllWeatherForecasts } from "./forecasts/allWeatherForecasts"
import { SummaryTab } from "./summaryView/summaryTab"
import { LocationSearch } from "./search/searchBar"

import { fetchWeatherApi } from 'openmeteo';
import { useState } from "react";

export const Dashboard = () => {

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const handleOnSearchChange = (data: { value: string, label: string }) => {
        setLatitude(data.value.split(" ")[0])
        setLongitude(data.value.split(" ")[1])
    }

    const params = {
        "latitude": `${latitude}`,
        "longitude": `${longitude}`,
        "current": ["temperature_2m", "relative_humidity_2m", "precipitation", "rain", "wind_speed_10m"],
        "hourly": ["temperature_2m", "relative_humidity_2m", "precipitation", "rain", "visibility", "wind_speed_80m"],
        "daily": ["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "rain_sum", "wind_speed_10m_max"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    const getResponse = async () => {
        const responses = await fetchWeatherApi(url, params)
        console.log(responses)
        return responses;
    }

    getResponse()
    console.log(params.latitude, params.longitude)

    return (
        <Container>
            <LocationSearch onSearchChange={handleOnSearchChange} />
            <SummaryTab />
            <AllWeatherForecasts />
        </Container>
    )
}

const Container = styled.div`
display: grid; 
grid-template-rows: 0.1fr 0.3fr 0.6fr;
grid-template-areas: 
"nav nav nav nav"
"summary summary summary summary"
"main main main main";
text-align: center; 
grid-gap: 0.25rem;
background: linear-gradient(360deg, #ffffff 0%, #335c81 74%);
`