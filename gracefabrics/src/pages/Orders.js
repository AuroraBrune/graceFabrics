import React from "react";
import Form from "../components/Form";

function Orders() {
    return (
        <div className="MuiGrid-grid-md-9">
            <div style={{color: "blue"}}>Customer Orders</div>
            <div>
                <Form />
            </div>
        </div>
    )
}

export default Orders;