import {useState, useCallback, useEffect} from 'react'
import './App.css'
import Card from "./Card/Card";
import {state,data,dataFace} from "../src/type/Type";

function App() {
    const [card, setCard] = useState<Array<data>>(dataFace);
    const [state,setState] = useState<state>({
        previousId: '',
        id: ''
    })

    const handleUpCard = useCallback((id?: any,value?: string) => {
        let a = [...card];
        if(!state.previousId){
            // 1 don't  click
            setState((pre) => ({...pre,previousId: id}))
            a[id] = {id: id, data: value, show: true};
            setCard(a);
        }else {
            // >= 2
            if(card[state.previousId].data === value){
                a[id] = {id: id, data: value, show: true};
                a[state.previousId] = {id: id, data: value, show: true};
                setCard(a);
                setState((pre) => ({...pre,previousId: ''}))
            } else {
                a[state.previousId] = {id: id, data: value, show: true};
                setCard(a);
                a[id] = {id: id, data: value, show: true};
                setCard(a);
                setState((pre) => ({...pre,previousId: ''}))
            }
        }
        setState((pre) => ({...pre,id: id}));
    },[state?.previousId])


    return (
        <>
            <Card
                dataFace={card}
                handleUpCard={handleUpCard}
            />
        </>
    )
}

export default App
