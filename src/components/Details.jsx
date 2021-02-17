import React, { useMemo, useState } from "react";
import FilterBox from './FilterBox';
import Data from '../warehouses.json';
import TableData from './TableData';

function Details() {

    var tableData = Data;
    const cityArray = [...new Set(Data.map(cities => cities.city))];
    const clusterArray = [...new Set(Data.map(clusters => clusters.cluster))];
    const spaceArray = [...new Set(Data.map(spaces => spaces.space_available))];
    const [selected, setSelected] = useState({
        city: 'By city',
        cluster: 'By cluster',
        space: 'By space available',
        search: ''
    });

    let id, value, name;

    function handleChange(event) {
        id = event.target.id;
        value = event.target.value;
        name = event.target.name;

        setSelected(() => {
            if (id == 'city') {
                return {
                    city: value,
                    cluster: '',
                    space: '',
                    search: ''
                }
            }
            else if (id == 'cluster') {
                return {
                    city: '',
                    cluster: value,
                    space: '',
                    search: ''
                }
            }
            else if (id == 'space') {
                return {
                    city: '',
                    cluster: '',
                    space: value,
                    search: ''
                }
            } else if (name == 'warehouseName') {
                return {
                    city: '',
                    cluster: '',
                    space: '',
                    search: value

                }
            }

        })

    }

    tableData = useMemo(() => {
        if (!selected || selected.city == 'By city' || selected.cluster == 'By cluster' || selected.space == 'By space available') return Data;
        return Data.filter((warehouse) => {

            if (selected.search) {
                return warehouse.name.toLowerCase().includes(selected.search.toLowerCase());
            }
            else if (selected.city) {
                return warehouse.city == selected.city;
            }
            else if (selected.cluster) {
                return warehouse.cluster == selected.cluster;
            } else if (selected.space) {
                console.log(warehouse.space, selected.space);
                return warehouse.space_available == selected.space;

            }
        });
    }, [selected, Data])
    console.log(tableData, "hello tabledata")


    return (<div className='container'>
        <h1 style={{ textAlign: "center" }}>Details</h1>
        <FilterBox cityArray={cityArray} clusterArray={clusterArray} spaceArray={spaceArray} handleChange={handleChange}
            search={selected.search} />
        <TableData tableData={tableData} />

    </div >
    )
}

export default Details;
