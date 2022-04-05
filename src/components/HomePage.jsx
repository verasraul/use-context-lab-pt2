import Reach, { useContext } from 'react';
import { ColorContext } from '../App';


export default function HomePage() {
    const Context = useContext(ColorContext);
    console.log(Context);

    return(
        <div>
            <h1 style={{color: 'yellow'}}>This is the HomePage in Yellow</h1>
        </div>
    )
}