import styled from "styled-components"
import { AllWeatherForecasts } from "./forecasts/allWeatherForecasts"
import { SummaryTab } from "./summaryView/summaryTab"
import { LocationSearch } from "./searchBar"

export const Dashboard = () => {
    return (
        <Container>
        <LocationSearch/>
       <SummaryTab/>
       <AllWeatherForecasts/>
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