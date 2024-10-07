import React, {useState} from 'react';
import s from "./style.module.css"

export const OffOn = () => {
    const [state, setState] = useState(false)
    const tumbler = (value: boolean) => {
        setState(value)
    }
    return (
        <div className={s.flex}>
            <div
                className={`${!state && s.red} ${s.myButton}`}
                onClick={() => tumbler(false)}
            >Off
            </div>
            <div
                onClick={() => tumbler(true)}
                className={`${state && s.green} ${s.myButton}`}
            >On
            </div>
            <div className={`${state ? s.green : s.red} ${s.lamp}`}>X</div>
        </div>
    );
};
