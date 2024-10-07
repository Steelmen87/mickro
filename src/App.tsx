import React, {useState} from 'react';
import './App.css';
import MyComponent, {MoneyType} from "./components/myComponent/MyComponent";
import {OffOn} from "./components/offOn/OffOn";

export type filterType = "all" | "Dollars" | "RUBLS"

function App() {

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
    return (
        <>
            {/* <MyComponent callback={onClickHandler} money={m}/>*/}
            <OffOn/>
        </>
    );
}

export default App;


