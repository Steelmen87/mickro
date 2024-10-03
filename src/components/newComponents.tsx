import React from 'react';
import s from './styles.module.css'
type car = {
    manufacturer: string
    model: string
}

type PropsType = {
    cars: car[]
}
const NewComponents = ({cars}: PropsType) => {
    return (
        <div>
            <table>
                <tr>
                    <th className={s.th}>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {cars.map((el, index) => <tr>
                    <td className={s.td}>{el.manufacturer}</td>
                    <td>{el.model}</td>
                </tr>)}
            </table>
        </div>
    );
};

export default NewComponents;