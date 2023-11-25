import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


export default function UserLog() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/v1/login', {
            username: username,
            password:password
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', marginTop: '10px' }}>User Login</h2>
            <Form onSubmit={handleSubmit} className="d-block w-50 mx-auto mt-4">
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Button type='submit' className='d-block mx-auto w-25 mt-5' variant="warning">Login</Button>
            </Form>
            

        </>
    )
}