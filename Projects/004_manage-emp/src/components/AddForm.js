import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext)

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addEmployee(name,email,address,phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control 
                    type="text" 
                    placeholder="Name *" 
                    required
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                    type="email" 
                    placeholder="Email *" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Address *"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                    type="text" 
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)} 
                    />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="success" type="submit">
                    Add New Employee
                </Button>
            </div>
        </Form>
    )
}

export default AddForm;