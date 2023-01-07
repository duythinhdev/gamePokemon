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
    value?: any
}

const Card: React.FunctionComponent<props> = ({dataFace,showCard,handleUpCard,id,value}) => {
    return (
        <div id="playfield">
            {dataFace?.map((value: any, index: number) => {
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