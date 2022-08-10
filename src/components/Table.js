import React from "react";
import {useState} from "react"
import stock_data from "./stock_data";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
    const [tableData, setTableData] = useState(stock_data);

    const columns = [
        {label : "Ticker", accessor: "ticker", sortable: true},
        {label : "Profit margin", accessor: "value", sortable: true},
    ];

    const handleSorting = (sortField, sortOrder) => {
        if(sortField){
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return(
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en",{
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
        }
    };

    return (
        <table className="the--table">
            <TableHead columns={columns} handleSorting={handleSorting}/>
            <TableBody columns={columns} tableData={tableData} />
        </table>
    );
};

export default Table;