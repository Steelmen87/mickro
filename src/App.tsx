import React, {useState} from 'react';
import './App.css';
import {MoneyType} from "./components/myComponent/MyComponent";
import {Input} from "./components/input/Input";
import {Button} from "./components/button/Button";

export type filterType = "all" | "Dollars" | "RUBLS"

function App() {
    const [title, setTitle] = useState("")
    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<filterType>("all")
    let m = money
    if (nameButton === "all") {
        m = money
    } else if (nameButton === "Dollars") {
        m = money.filter(el => el.banknots === nameButton)
    } else if (nameButton === "RUBLS") {
        m = money.filter(el => el.banknots === nameButton)
    }
    const onClickHandler = (name: filterType) => {
        setNameButton(name)
    }

    const [messages, setMessage] = useState([
        {message: "message 1",},
        {message: "message 2",},
        {message: "message 3",},
    ])
    const callBack = (value: string) => {
        setMessage([{message: value}, ...messages])
    }
    const callBackMassage = (value: string) => {
        setMessage([{message: value}, ...messages])
        setTitle("")
    }
    return (
        <>
            {/* <MyComponent callback={onClickHandler} money={m}/>*/}
            {/*  <OffOn/>*/}
            {/*<FullInput cb={callBack}/>*/}
            <Input value={title} callBackChange={setTitle}/>
            <Button
                name={"+"}
                callBack={() => callBackMassage(title)}/>
            <ul>
                {messages.map(el => <li>{el.message}</li>)}
            </ul>

        </>
    );
}

export default App;


