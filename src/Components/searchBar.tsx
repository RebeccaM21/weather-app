import styled from "styled-components"

export const LocationSearch = () => {
    return (
        <SearchForm>
        <SearchBar placeholder="Search for location!"></SearchBar>
        </SearchForm>
    )
}

const SearchForm = styled.div`
grid-area: nav; 
margin-top: 0.5em;
padding: 1em; 
`

const SearchBar = styled.input.attrs({ type: "search"})`
width: 75%;
border-radius: 10px;
`

