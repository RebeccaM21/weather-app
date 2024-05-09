import styled from "styled-components"
import { ForecastColumn } from "./forecastColumn"

export const WeatherForecastRow = () => {
    return (
        <Row>
        <ForecastColumn/>
        <ForecastColumn/>
        <ForecastColumn/>
        <ForecastColumn/>
        </Row>
    )
}

const Row = styled.div`  
display: flex; 
flex-direction: row; 
justify-content: space-evenly; 
margin: 0.5em; 
`


