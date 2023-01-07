import React from 'react';
import {data} from "../type/Type";

interface props {
    dataFace?: data[],
    showCard?: boolean,
    handleUpCard?: ((index: number,data: string) => (void | undefined)) | undefined,
    id?: number
    value?: string
}

const Card: React.FunctionComponent<props> = ({dataFace,showCard,handleUpCard,id,value}) => {
    return (
        <div id="playfield">
            {dataFace?.map((value: any, index: number) => {
                let previousClick = value.data;
                // if (showCard && value.data === data){
                //     return <div
                //         className={`card up`}
                //         key={index}
                //         onClick={() => handleUpCard && handleUpCard(value.id,value.data)}
                //     >
                //         {value?.data}
                //     </div>
                // }
                return <div
                    className={`card ${(showCard && id === value?.id)  ? 'up' : 'down'}`}
                    key={index}
                    onClick={() => handleUpCard && handleUpCard(value.id,value.data)}
                >
                    {value?.data}
                </div>
            })}
        </div>
    );
}

export default React.memo(Card);