import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import FilterBox from './FilterBox';
import Data from '../warehouses.json';



function Details(props) {

    const cityArray = [...new Set(Data.map(cities => cities.city))];
    const clusterArray = [...new Set(Data.map(clusters => clusters.cluster))];
    const spaceArray = [...new Set(Data.map(spaces => spaces.space_available))];

    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>Details</h1>
        <FilterBox cityArray={cityArray} clusterArray={clusterArray} spaceArray={spaceArray} />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th><th>NAME</th><th>CITY</th><th>CLUSTER</th><th>SPACE AVAILABLE</th><th>DETAILS</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((item, index) => {
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
    </div >
    )
}

export default Details;
