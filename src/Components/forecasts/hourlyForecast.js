import styled from "styled-components"
import { ForecastColumn } from "./forecastColumn"

export const HourlyForecast = ({forecastWeatherData}) => {
    return (
        <Container>
        <Title>Hourly Forecast</Title>
        <Row>
        {forecastWeatherData.list.slice(0,5).map(( timestamp) => {
       return <ForecastColumn data={timestamp}/>
    })}
        </Row>
        </Container>
    )
}

const Title = styled.span`
font-size: 1.5em;
`

const Container = styled.div`
display: grid; 
grid-area: main;
padding: 2em; 
`

const Row = styled.div`  
display: flex; 
flex-direction: row; 
justify-content: space-evenly; 
margin: 0.5em; 
`



