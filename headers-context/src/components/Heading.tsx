import { useContext, ReactNode } from 'react';
import { LevelContext } from "../context/LevelContext";

export interface HeadingProps{
    children: ReactNode
}

export default function Heading({children}: HeadingProps){
    const level = useContext(LevelContext);

    switch(level){
        case 0:
            throw Error("Heading tem que esta dentro de uam Section.");
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            throw Error("Não existe: " + level);
    }
}