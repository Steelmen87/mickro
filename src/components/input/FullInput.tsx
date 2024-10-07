import React, {useState} from 'react';
import {Button} from "../button/Button";

type PropsType = {
    cb: (valueInput: string) => void
}
export const FullInput = ({cb}: PropsType) => {
    const [value, setValue] = useState("")
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const callBack = () => {
        cb(value)
        setValue("")
    }
    return (
        <div>
            <input
                value={value}
                onChange={onChangeHandler}
                type="text"
            />
            <Button
                name={"+"}
                callBack={callBack}/>
        </div>
    );
};

