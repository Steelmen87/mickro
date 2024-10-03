import React from 'react';

type Props = {
    name: string
    callBack: () => void
}
export const Button = ({name, callBack}: Props) => {
    const onClickHandler = () => {
        callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};
