import styled from "styled-components"
import { WeatherForecastRow } from "./weatherForecast"

export const AllWeatherForecasts = () => {
    return (
        <Container>
        <WeatherForecastRow/>
        <WeatherForecastRow/>
        <WeatherForecastRow/>
        <WeatherForecastRow/>
        <WeatherForecastRow/>
        <WeatherForecastRow/>
        </Container>
    )
}

const Container = styled.div`
display: grid; 
grid-area: main;
`