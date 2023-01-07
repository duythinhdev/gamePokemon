import {useState, useCallback, useEffect} from 'react'
import './App.css'
import Card from "./Card/Card";
import {state,data,dataFace} from "../src/type/Type";

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
