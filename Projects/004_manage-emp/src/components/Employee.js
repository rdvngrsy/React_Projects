import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import EditForm from "./EditForm";

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>

                <OverlayTrigger
                    placement="top"
                    delay={{ show: 50, hide: 50 }}
                    overlay={
                        <Tooltip id="button-tooltip">
                        Edit
                        </Tooltip>}
                >
                    <button onClick={handleShow} className="btn text-warning btn-edt" style={{ padding: "0px" }} data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="top"
                    delay={{ show: 50, hide: 50 }}
                    overlay={
                        <Tooltip id="button-tooltip">
                        Delete
                        </Tooltip>}
                >
                    <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-edt" style={{ padding: "0px" }} data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;