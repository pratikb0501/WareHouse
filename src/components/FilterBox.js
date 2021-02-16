import { Button } from "react-bootstrap";
import React from "react";


function FilterBox(props) {

    const cities = props.cityArray;
    const cluster = props.clusterArray;
    const space = props.spaceArray;

    return (
        <div style={{ backgroundColor: "#aaaaaa" }}>
            <h5><strong>Filter by</strong></h5>
            <select onChange={props.handleChange} id='city'>
                <option defaultValue>By city </option>
                {cities.map((item, index) => <option key={index} value={item}>{item}</option>)}
            </select>

            <select onChange={props.handleChange} id='cluster'>
                <option defaultValue>By cluster </option>
                {cluster.map((item, index) => <option key={index} value={item} >{item}</option>)}
            </select>

            <select onChange={props.handleChange} id='space'>
                <option defaultValue >By space available</option>
                {space.map((item, index) => <option key={index} value={item} >{item}</option>)}
            </select>

            <label><strong>Search Ware House</strong>
                <input type='text' name="warehouseName" placeholder="Enter warehouse name" />
                <Button variant="outline-dark">Submit</Button>
            </label>


        </div >
    )

}

export default FilterBox;