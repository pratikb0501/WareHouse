import React from "react";
import { data } from "./data";
import { Table, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";


function FullDetails() {

    const { id } = useParams();

    const renderData = (warehouse, index) => {
        if (index + 1 == id) {
            return (
                <tr key={index + 1}>
                    <td>{warehouse.id}</td>
                    <td>{warehouse.name}</td>
                    <td>{warehouse.code}</td>
                    <td>{warehouse.city}</td>
                    <td>{warehouse.type}</td>
                    <td>{warehouse.cluster}</td>
                    <td>{warehouse.space_available}</td>
                    <td>{warehouse.is_registered.toString()}</td>
                    <td>{warehouse.is_live.toString()}</td>
                    <Link to={"/" + id + "/edit"}>
                        <td><Button variant="outline-info">edit</Button></td>
                    </Link>
                </tr >
            )
        }
    }


    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>WareHouse Detail</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th><th>NAME</th><th>CODE</th><th>CITY</th><th>TYPE</th><th>CLUSTER</th><th>SPACE AVAILABLE</th><th>IS REGISTERED?</th><th>IS LIVE?</th><th>EDIT</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderData)}
            </tbody>


            <tfoot></tfoot>

        </Table>

    </div>
    )

}

export default FullDetails;