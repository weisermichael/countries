import styled from 'styled-components'

export const DisplayDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #4A6E82;
    padding: 10px;
    width: 80%;
    margin: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    p {
        margin: 0;
        display: block;
        padding-inline-start: 40px;
        span {
            font-weight: bold;
        }
    }
    .langs {
        margin-bottom: 1em;
    }
    h1, h2 {
        text-align: center;
        //margin-top: 1em;
    }
    h1:after {
        content: '';
        display:block;
        border-bottom: 1px solid rgba(0,0,0,0.2); 
    }
    h2:after {
        content: '';
        display:block;
        width: 20%;
        margin: auto;
        border-bottom: 1px solid rgba(0,0,0,0.2); 
    }
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
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
`