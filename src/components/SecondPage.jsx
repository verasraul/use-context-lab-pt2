import React, { useContext } from 'react';
import { ColorContext } from '../App';


export default function(){
    const Context = useContext(ColorContext);
    console.log(Context);

    return(
        <div>
            <h1 style={{color: 'green'}}> This the SecondPage in Green</h1>
        </div>
    )
}