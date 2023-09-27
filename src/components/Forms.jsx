import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Fox.css';

const Forms = () => {

    const [email, setEmail] = useState('');
    const [foxName, setFoxName] = useState('');
    const [foxPhrase, setFoxPhrase] = useState('');
    const [foxAge, setFoxAge] = useState(0);
    const [foxImage, setFoxImage] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [locked, setLocked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User entered email: ', email);
        setFormSubmitted(true);
        fetchFox();
    }

    const fetchFox = async () => {
        let response = await fetch('https://randomfox.ca/floof/');
        let data = await response.json()
        console.log(data)
        setFoxImage(data.image)
    }

    const handleChange = (e) => {
        setLocked(true)
    }

    useEffect(() => {
        setFormSubmitted(false)
    }, [foxPhrase])


    return (
        <>
            <img id='foxIMG' src='/src/assets/fox.png' />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control disabled={locked} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Give Fox a name</Form.Label>
                    <Form.Control disabled={locked} onChange={(e) => setFoxName(e.target.value)} type="text" placeholder="Fox Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fox Age</Form.Label>
                    <Form.Control disabled={locked} onChange={(e) => setFoxAge(e.target.value)} type="text" placeholder="Fox Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>What does the fox say?</Form.Label>
                    <Form.Control disabled={locked} onChange={(e) => setFoxPhrase(e.target.value)} type="text" placeholder="Fox Name" />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={handleChange}>Lock Card</Button>
            </Form>

            {formSubmitted && (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foxImage} />
                    <Card.Body>
                        <Card.Title>{foxName}</Card.Title>
                        <Card.Text>
                            {foxPhrase}
                        </Card.Text>
                        <Card.Text>
                            Age: {foxAge}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}

        </>
    )
}

export default Forms