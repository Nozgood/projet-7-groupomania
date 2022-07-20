import React, {useEffect, useState } from 'react';
import Publish from '../homepage/publish/Publish';

const Test = () => {

    const [backendData, setBackendData] = useState([{}]);

    // pas oblige d'indiaquer le chemin entier grace au script proxy
        useEffect(() => { 
            fetch('/api')
            .then(res => 
                res.json()
            )
            .then(data => {
                setBackendData(data);
            })
    }, [])

    return (
        <div>
            <Publish />
        </div>
    )
}

export default Test
