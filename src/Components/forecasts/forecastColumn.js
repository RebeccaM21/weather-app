import styled from "styled-components"
import sunny from "../../images/sunny.png"; 
import cloudy from "../../images/cloudy.png";
import lightning from "../../images/lightning.png";
import rain from "../../images/rain.png";

export const ForecastColumn = ({data}) => {

    const getWeatherImage = () => {

        console.log(data.weather[0].main)
        
        if(data.weather[0].main === "Clouds"){
           return cloudy 
        }
        else if(data.weather[0].main === "Rain") {
            return rain 
        }
        else if(data.weather[0].main === "Sun") {
            return sunny
        }
        else if(data.weather[0].main === "Lightning") {
            return lightning
        }
        else return sunny; 
    }

    return (
        <Container>
        <Text>{data.dt_txt.split(" ")[1]}</Text> 
        <Image>
            <img src={getWeatherImage()} alt="sunny" height={"50em"}/>
            </Image>
        <Text>{Math.trunc(data.main.temp)}°</Text> 
        </Container>
    )
} 


const Container = styled.div`
display: grid; 
float: left; 
margin: 0.5em; 
`
const Text = styled.span`
font-weight: bold; 
`

const Image = styled.div`
 border-radius: 50%;
`