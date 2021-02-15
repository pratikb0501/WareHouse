import React from "react";


function FilterBox(props) {

    const divStyle = {
        backgroundColor: "grey",
        color: "white"
    }

    const cities = props.cityArray;
    const cluster = props.clusterArray;
    const space = props.spaceArray;



    return (
        <div style={{ divStyle }}>
            <h6>Filter by</h6>
            <select>
                <option defaultValue>By city </option>
                {cities.map(item => <option value={item}>{item}</option>)}
            </select>
            <select >
                <option defaultValue>By cluster </option>
                {cluster.map(item => <option value={item}>{item}</option>)}
            </select>
            <select>
                <option defaultValue >By space available</option>
                {space.map(item => <option value={item}>{item}</option>)}
            </select>


        </div >
    )

}

export default FilterBox;