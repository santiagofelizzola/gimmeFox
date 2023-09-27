import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FoxImageFetcher = () => {

    const [foxImage, setFoxImage] = useState('')

    const fetchFox = async () => {
        let response = await fetch('https://randomfox.ca/floof/');
        let data = await response.json()
        console.log(data)
        setFoxImage(data.image)
    }

    // useEffect(() => {
    //     fetchFox()
    // }, [])


    return (
        <>
            {/* <button onClick={fetchFox}>Show me the fox</button> */}
            {/* <img src={foxImage} /> */}

        </>
    )
}

export default FoxImageFetcher