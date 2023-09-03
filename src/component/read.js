import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Read = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios
            .get('https://64e01cfb50713530432c2401.mockapi.io/crud')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        axios
            .delete(`https://64e01cfb50713530432c2401.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <h1> Read Operation </h1>

                <Link to='/'>
                    <button className="btn btn-secondary m-3">Create</button>
                </Link>
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to='/update'>
                                                <button
                                                    className="btn btn-primary mr-3"
                                                    onClick={() => setToLocalStorage(
                                                        eachData.id,
                                                        eachData.name,
                                                        eachData.email
                                                    )}
                                                >Edit</button>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(eachData.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })

                }

            </table>
        </>
    )
}

export default Read