import styled from "styled-components"
import logo from "../../images/sunny.png"; 

export const ForecastColumn = () => {
    return (
        <Container>
        <Text>21:00</Text> 
        <Image logo={logo}>
            <img src={logo} alt="sunny" height={"50em"}/>
            </Image>
        <Text>20°</Text> 
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

const Image = styled.div<{logo: string}>`
 border-radius: 50%;

`