import styled from "styled-components"
import { ForecastColumn } from "./forecastColumn"

export const HourlyForecast = ({forecastWeatherData}) => {

    const isSunny = ["01d", "02d", "03d"].includes(forecastWeatherData.list[0].weather[0].icon);
    const isDailyTrue = false;

    return (
        <Container $isSunny={isSunny}>
        <Title>Hourly Forecast</Title>
        <Row>
        {forecastWeatherData?.list.slice(0,5).map((forecast, index) => {
       return <ForecastColumn data={forecast} key={index} position={index} daily={isDailyTrue}/>
       
    })}
        </Row>
        </Container>
    )
}

const Title = styled.span`
font-size: 2em;
margin: 0em 0em 1.5em 0em;
font-weight: bold;
`

const Container = styled.div`
display: flex; 
justify-content: center;
width: 80vh;
height: 20em;
flex-direction: column;  
border-radius: 30px;
margin: 2em;
background: ${props => props.$isSunny ? "linear-gradient(400deg, #D3D3D3  0%, #FECA57 75%)" : "linear-gradient(200deg, #FFFFFF 0%, #087EE1 75%)"};
box-shadow: 0.5em 0.5em 0.5em;
`

const Row = styled.div`  
display: flex;
flex-direction: row; 
justify-content: space-evenly; 
margin: 0.5em;
`



