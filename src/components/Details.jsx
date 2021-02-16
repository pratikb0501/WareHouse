import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import FilterBox from './FilterBox';
import Data from '../warehouses.json';



function Details(props) {

    var tableData = Data;
    const cityArray = [...new Set(Data.map(cities => cities.city))];
    const clusterArray = [...new Set(Data.map(clusters => clusters.cluster))];
    const spaceArray = [...new Set(Data.map(spaces => spaces.space_available))];

    const [selected, setSelected] = useState({
        city: '',
        cluster: '',
        space: ''
    });
    useEffect(() => {
        console.log(selected.city)
        tableData = tableData.filter(item => {
            if (item.city == selected.city) {
                return item;
            }
        })
        console.log(tableData, 'saasd');
    })
    console.log(tableData);

    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;

        setSelected(preValue => {
            if (id == 'city') {
                return {
                    city: value,
                    cluster: '',
                    space: ''
                }
            }
            else if (id == 'cluster') {
                return {
                    city: '',
                    cluster: value,
                    space: ''
                }
            }
            else {
                return {
                    city: '',
                    cluster: '',
                    space: value
                }
            }

        })
    }



    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>Details</h1>
        <FilterBox cityArray={cityArray} clusterArray={clusterArray} spaceArray={spaceArray} handleChange={handleChange} />
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
    </div >
    )
}

export default Details;
