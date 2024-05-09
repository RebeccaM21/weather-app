import styled from "styled-components"

export const SummaryTab = () => {
    return (
        <NavBar>
            <Title> Manchester </Title>
            <TemperatureReading> 20° </TemperatureReading>
            <SummaryDetails>Partly Cloudy</SummaryDetails>
            <SummaryDetails>H:34° L:34°</SummaryDetails>
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