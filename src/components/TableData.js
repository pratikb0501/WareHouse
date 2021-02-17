import React from 'react';
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Data from '../warehouses.json'


function TableData(props) {

    var tableData = props.tableData;


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th><th>NAME</th><th>CITY</th><th>CLUSTER</th><th>SPACE AVAILABLE</th><th>DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.cluster}</td>
                                <td>{item.space_available}</td>
                                <td>
                                    <Link to={"/" + item.id}>
                                        <Button variant="outline-info" name={item.id}>
                                            addtional info
                         </Button>
                                    </Link>
                                </td>
                            </tr >
                        )

                    })}

                </tbody>

                <tfoot></tfoot>

            </Table>
        </div>
    )
}

export default TableData;