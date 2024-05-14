import styled from "styled-components"

export const ForecastColumn = ({data, position, daily}) => {

    const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDayInWeek = new Date().getDay();
    const forecastDays = WEEKDAYS.splice(getDayInWeek, WEEKDAYS.length).concat(WEEKDAYS.splice(0, getDayInWeek));
    
    return (
        <Container> 
        {daily && <Text>{forecastDays[position]}</Text>}
        {!daily && <Text>{data.dt_txt.split(" ")[1]}</Text>}
        <Image><img src={`images/${data.weather[0].icon}.png`} alt="weather" height={"50em"}/></Image>
        <Text>{Math.trunc(data.main.temp)}°C</Text> 
        </Container>
    )
} 


const Container = styled.div`
display: grid; 
float: left; 
margin: 0.5em; 
`
const Text = styled.span`
font-size: 1.2em;
font-weight: bold; 
`

const Image = styled.div`
 border-radius: 50%;
`