import React from 'react';
import {data} from "../type/Type";

interface props {
    dataFace?: data[];
    handleUpCard?: ((index: number,data: string) => (void | undefined)) | undefined;
}

const Card: React.FunctionComponent<props> = ({dataFace,handleUpCard}) => {

    return (
        <div id="playfield">
            {dataFace?.map((value: any, index: number) => {
                return <div
                    className={`card ${value.show  ? 'up' : 'down'}`}
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