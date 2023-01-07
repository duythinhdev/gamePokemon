import React from 'react';

interface data {
    id?: number,
    data?: number
}
interface props {
    dataFace?: Array<data>,
    showCard?: boolean,
    handleUpCard?: ((index: any,data:any) => (void | undefined)) | undefined,
    id?: number
    data?: number
}

const Card: React.FunctionComponent<props> = ({dataFace,showCard,handleUpCard,id,data}) => {
    return (
        <div id="playfield">
            {dataFace?.map((value: any, index: number) => {
                return <div
                    className={`card ${showCard && id === value?.id  ? 'up' : 'down'}`}
                    key={index}
                    onClick={(id: any) => handleUpCard && handleUpCard(value.id,value.data)}
                >
                    {value?.data}
                </div>
            })}
        </div>
    );
}

export default React.memo(Card);