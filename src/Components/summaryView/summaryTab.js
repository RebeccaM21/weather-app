import styled from "styled-components"

export const SummaryTab = ({currentWeatherData}) => {

    const isSunny = ["01d", "02d", "03d"].includes(currentWeatherData.weather[0].icon)

    return (
        <Container $isSunny={isSunny}>
            <Image><img src={`images/${currentWeatherData?.weather[0].icon}.png`} alt="weather"></img></Image>
            <Title> {currentWeatherData?.city} </Title>
            <TemperatureReading>{Math.trunc(currentWeatherData?.main.temp)}°</TemperatureReading>
            <SummaryDetails>{currentWeatherData?.weather[0].description}</SummaryDetails>
            <SummaryDetails>H:{Math.trunc(currentWeatherData?.main.temp_max)}°  L:{Math.trunc(currentWeatherData?.main.temp_min)}°</SummaryDetails>
        </Container>
    )
}

const Container = styled.div`
display: flex; 
justify-content: center;
width: 50vh;
height: 20em;
flex-direction: column;  
border-radius: 30px;
padding: 1em;
box-shadow: 0.5em 0.5em 0.5em;
background: ${props => props.$isSunny ? "linear-gradient(400deg, #D3D3D3  0%, #FECA57 75%)" : "linear-gradient(200deg, #FFFFFF 0%, #087EE1 75%)"};
`

const Title = styled.span`
font-size: 3em;
`

const TemperatureReading = styled.span` 
font-size: 5em;
`
const SummaryDetails = styled.span`
text-transform: capitalize;
font-size: 1.5em;
`

const Image = styled.div`
 border-radius: 50%;
 margin: -1em;
`