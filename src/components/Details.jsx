import React from "react";
import { data } from './data';
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import FilterBox from './FilterBox';



function Details() {

    const renderData = (warehouse, index) => {
        return (
            <tr key={index}>
                <td>{warehouse.id}</td>
                <td>{warehouse.name}</td>
                <td>{warehouse.city}</td>
                <td>{warehouse.cluster}</td>
                <td>{warehouse.space_available}</td>
                <td>
                    <Link to={"/" + warehouse.id}>
                        <Button variant="outline-info" name={warehouse.id}>
                            addtional info
                        </Button>
                    </Link>
                </td>
            </tr >
        )
    }
    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>Details</h1>
        <FilterBox />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th><th>NAME</th><th>CITY</th><th>CLUSTER</th><th>SPACE AVAILABLE</th><th>DETAILS</th>
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

export default Details;
