import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UserRegForm(){
    

    return(
        <>
            <h2 style={{textAlign:'center', marginTop:'10px'}}>User Registration</h2>
            <Form className="d-block w-50 mx-auto mt-4">
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <Button className='d-block mx-auto w-25 mt-5' variant="success">Sign Up</Button>
            
        </>
    )
}