import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

    const {updateEmployee} = useContext(EmployeeContext)

    const employee = theEmployee
    const id = employee.id


    const [name,setName] = useState(employee.name)
    const [email,setEmail] = useState(employee.email)
    const [address,setAddress] = useState(employee.address)
    const [phone,setPhone] = useState(employee.phone)

    const updatedEmployee = {id,name,email,address,phone}

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee(id,updatedEmployee)
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
                    Update Employee
                </Button>
            </div>
        </Form>
    )
}

export default EditForm;