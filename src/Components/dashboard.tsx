import styled from "styled-components"
import { AllWeatherForecasts } from "./forecasts/allWeatherForecasts"
import { SummaryTab } from "./summaryView/summaryTab"
import { LocationSearch } from "./search/searchBar"
import { useState } from "react";
import { API_KEY, weatherApiUrl } from "../api/api";

export const Dashboard = () => {

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const handleOnSearchChange = (data: { value: string, label: string }) => {
        setLatitude(data.value.split(" ")[0])
        setLongitude(data.value.split(" ")[1])
    }

    const currentWeatherData = fetch(`${weatherApiUrl}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)


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