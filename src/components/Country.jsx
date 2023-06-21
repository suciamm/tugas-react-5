import React from "react";
import { useState } from 'react';


const Country = (custom) =>{
    return(
        <>
        <div>
            <h3 className="show">{custom.id}. {custom.name}, sebanyak {custom.resident} jiwa </h3>
        </div>
        </>
    )
}

export default Country
