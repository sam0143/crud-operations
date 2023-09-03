import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {


    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'))
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://64e01cfb50713530432c2401.mockapi.io/crud/${id}`, {
                name: name,
                email: email
            })
            .then(() => {
                navigate('/read')
            })
    }

    return (
        <>
            <h1>
                Update Operation
            </h1>
            <Form>
                <Form.Group className="m-3">
                    <Form.Label> <b>Name :</b></Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="m-3">
                    <Form.Label><b>Email :</b></Form.Label>
                    <Form.Control
                        type="eamil"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="m-3"
                    onClick={handleUpdate}
                >
                    Submit
                </Button>
                <Link to='/read'>
                    <button className="btn btn-secondary">Back</button>
                </Link>
            </Form>
        </>
    )
}

export default Update;