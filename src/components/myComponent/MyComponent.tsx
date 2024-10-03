import React from 'react';
import {Button} from "../button/Button";
import {filterType} from "../../App";

export type MoneyType ={
    banknots: filterType
    value: number
    number: string
}
 type PropsType = {
    money:MoneyType[]
    callback:(name:filterType)=>void
}

const MyComponent = ({money,callback}:PropsType) => {
    return (
        <>
            <ul>
                {money.map(el => <li key={el.number}>
                    <span>{el.banknots}</span>
                    <span>{el.value}</span>
                    <span>{el.number}</span>
                </li>)}
            </ul>
            <div>
                <Button name={"all"} callBack={() => callback("all")}/>
                <Button name={"Dollars"} callBack={() => callback("Dollars")}/>
                <Button name={"RUBLS"} callBack={() => callback("RUBLS")}/>
            </div>
        </>
    );
};

export default MyComponent;