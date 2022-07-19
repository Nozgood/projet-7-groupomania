import React, {useEffect, useState } from 'react'

const Test = () => {

    const [backendData, setBackendData] = useState();

    useEffect(() => {
    // pas oblige d'indiaquer le chemin entier grace au script proxy
        fetch('/api')
            .then(res => {
                res.json()
            })
            .then(data => {
                setBackendData(data);
            })
    }, [])
    return (
        <div>

            {
                (typeof backendData === 'undefined') ? (
                    <p> Loading ...</p>
                ) : (
                    backendData.posts.map((data, i) => (
                        <p key={i}> {data}</p>
                    ))
                )
            }

        </div>
    )
}

export default Test