import styled from "styled-components"

export const SummaryTab = ({currentWeatherData}) => {
    return (
        <NavBar>
            <Title> {currentWeatherData?.city} </Title>
            <TemperatureReading>{Math.trunc(currentWeatherData.main.temp)}°</TemperatureReading>
            <SummaryDetails>{currentWeatherData.weather[0].description}</SummaryDetails>
            <SummaryDetails>H:{Math.trunc(currentWeatherData.main.temp_max)}°  L:{Math.trunc(currentWeatherData.main.temp_min)}°</SummaryDetails>
        </NavBar>
    )
}

const NavBar = styled.section`
grid-area: summary; 
padding: 1em;
display: grid; 
text-align: center; 
`

const Title = styled.span`
font-size: 1.5em;
`

const TemperatureReading = styled.span` 
font-size: 3em;
`
const SummaryDetails = styled.span`

`