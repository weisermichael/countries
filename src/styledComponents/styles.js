import styled from 'styled-components'

export const DisplayDiv = styled.div`
    display: flex;
    justify-content: center;

    border: 1px solid #4A6E82;
    padding: 10px;
`
export const WeatherDiv = styled.div`
    display: grid;
    align-items: center;
    column-gap:10px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "temp pic"
        "temp pic"
        "wind pic"
        "wind pic";
    border: 1px solid #4A6E82;
    padding: 10px;
`
export const TempContainer = styled.div`
    //border: 1px solid hotpink;
    //align-self: stretch;
    grid-area: temp;
`

export const WindContainer = styled.div`
    //border: 1px solid hotpink;
    //align-self: stretch;
    grid-area: wind;
`

export const PicContainer = styled.div`
    //border: 1px solid red;
    grid-area: pic;
    align-self: stretch;
`