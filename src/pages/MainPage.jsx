"use client"
import { useEffect, useState } from 'react';
import './styles.css';

export const MainPage = ({ data }) => {

    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        setSortedData(data.sort((a, b) => a.edad - b.edad))
    }, [data])

    return (
        <div className="main"> 
            <div className={'mainPage'}>
                <h1 className={'title'}>Lista de personas</h1>
                <ul className={'list'}>
                    {sortedData.map((person) => (
                        <li className={'item'} key={person.nombre}>
                            {person.nombre} - {person.edad}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}




