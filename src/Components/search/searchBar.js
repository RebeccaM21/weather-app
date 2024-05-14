import { useState } from "react"
import styled from "styled-components"
import { AsyncPaginate } from "react-select-async-paginate"
import { ApiOptions, url } from "../../api/api"


export const LocationSearch = ({onSearchChange}) => {

    const [search, setSearch] = useState(null) 

    const loadOptions = async (input) => {
        try {
            const response = await fetch(`${url}?minPopulation=100000&namePrefix=${input}`, ApiOptions);
            const result = await response.json();

            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (data) => {
        setSearch(data)
        onSearchChange(data)
    }

return (
    <SearchForm>
        <AsyncPaginate debounceTimeout={500} placeholder="Search for location!" value={search} onChange={handleOnChange} loadOptions={loadOptions} />
    </SearchForm>
)
}

const SearchForm = styled.div`
grid-area: nav; 
margin-top: 0.5em;
padding: 1em; 
`

