import React from 'react';

type PropsType = {
    callBackChange: (value:string) => void
    value: string
}
export const Input = ({callBackChange, value}: PropsType) => {
    return (
        <>
            <input value={value} onChange={(event)=>callBackChange(event.currentTarget.value)}/>
        </>
    )
};
