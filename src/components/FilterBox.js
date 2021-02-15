import React from "react";


function FilterBox() {

    const divStyle = {
        backgroundColor: "grey",
        color: "white"
    }

    const cities = ['Mumbai', 'Indore', 'Delhi', 'Chennai', 'Banglore', 'Guwahati'];
    const clusters = ['cluster-a-32', 'cluster-a-1', 'cluster-a-21', 'cluster-a-2', 'cluster-v-2'];
    const spaceAvailable = [1234, 124, 134, 12, 1243434, 1, 4, 3456, 1234545, 121234, 98, 97, 654]


    return (
        <div >

            <select>
                <option>By city </option>
                {cities.map(city => {
                    <option>{city}</option>
                })}
            </select>

        </div >
    )

}

export default FilterBox;