import React from "react";
import { Table, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Data from '../warehouses.json';


function FullDetails() {

    const { id } = useParams();

    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>WareHouse Detail</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th><th>NAME</th><th>CODE</th><th>CITY</th><th>TYPE</th><th>CLUSTER</th><th>SPACE AVAILABLE</th><th>IS REGISTERED?</th><th>IS LIVE?</th><th>EDIT</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((item, key) => {
                    if (key + 1 == id) {
                        return (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.code}</td>
                                <td>{item.city}</td>
                                <td>{item.type}</td>
                                <td>{item.cluster}</td>
                                <td>{item.space_available}</td>
                                <td>{item.is_registered.toString()}</td>
                                <td>{item.is_live.toString()}</td>
                                <Link to={"/" + id + "/edit"}>
                                    <td><Button variant="outline-info">edit</Button></td>
                                </Link>
                            </tr >
                        )
                    }

                })}

            </tbody>


            <tfoot></tfoot>

        </Table>

    </div>
    )

}

export default FullDetails;