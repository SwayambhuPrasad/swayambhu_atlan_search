import React from "react";
import "bootstrap/dist/css/bootstrap.css"
const Table = (props) => {
    return (
        < table className='table table-striped table-dark' >
            <tbody>
                <tr>
                    {props.keys.map((key, i) =>
                        (<th key={i}>{key}</th>)
                    )}
                </tr>
                {props.data.map((item, i) => (
                    <tr key={i}>
                        {props.keys.map((key, i) =>
                            (<td key={i}>{item[key]}</td>)
                        )}
                    </tr>
                ))}
            </tbody>
        </table >
    )
}
export default Table;