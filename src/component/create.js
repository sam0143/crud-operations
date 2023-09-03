import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://64e01cfb50713530432c2401.mockapi.io/crud', {
                name: name,
                email: email
            })
            .then(() => {
                navigate('/read')
            })
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1>Create Operation</h1>
                <Link to='/read'>
                    <button className="btn btn-primary m-3">Show Data</button>
                </Link>
            </div>
            <Form>
                <Form.Group className="m-3">
                    <Form.Label> <b>Name :</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label><b>Email :</b></Form.Label>
                    <Form.Control
                        type="eamil"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="m-3"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Create;