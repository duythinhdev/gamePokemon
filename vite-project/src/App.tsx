import {useState, useCallback} from 'react'
import './App.css'
import Card from "./Card/Card";

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
    const [card, setCard] = useState<Array<any>>(dataFace);
    const [showCard, setShowCard] = useState<boolean>(false);
    const [id, setId] = useState<any>();
    const [value,setValue] = useState();

    const handleUpCard = useCallback((index: number,data: any) => {
        setShowCard(true);
        setId(index);
        setValue(data)
    },[id,showCard,value])
    return (
        <>
            <Card
                dataFace={card}
                showCard={showCard}
                handleUpCard={handleUpCard}
                data={value}
                id={id}
            />
        </>
    )
}

export default App
