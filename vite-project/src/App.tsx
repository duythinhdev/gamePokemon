import {useState, useCallback, useEffect} from 'react'
import './App.css'
import Card from "./Card/Card";
import {state,data} from "../src/type/Type";

const dataFace = [
    {
        id: 1,
        data: 1,
    },
    {
        id: 2,
        data: 2,
    },
    {
        id: 3,
        data: 3,
    },
    {
        id: 4,
        data: 4,
    },
    {
        id: 5,
        data: 5,
    },
    {
        id: 6,
        data: 6,
    },
    {
        id: 7,
        data: 1,
    },
    {
        id: 8,
        data: 2,
    },
    {
        id: 9,
        data: 3,
    },
    {
        id: 10,
        data: 4,
    },
    {
        id: 11,
        data: 5,
    },
    {
        id: 12,
        data: 6,
    },
]
function App() {
    const [card, setCard] = useState<Array<data>>(dataFace);
    const [state,setState] = useState<state>({
        show: false,
        id: 0,
        value: ""
    })

    const handleUpCard = useCallback((index?: number,data?: string) => {
        setState((pre) => ({...pre,show: true}))
        setState((pre) => ({...pre,id: index}))
        setState((pre) => ({...pre,value: data}))
    },[state?.show,state?.id,state?.value])

    return (
        <>
            <Card
                dataFace={card}
                showCard={state?.show}
                handleUpCard={handleUpCard}
                value={state?.value}
                id={state?.id}
            />
        </>
    )
}

export default App
