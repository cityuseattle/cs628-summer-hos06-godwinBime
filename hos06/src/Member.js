import React from "react";
import { useParams } from "react-router-dom";

export default function Member(){
    const {id} = useParams();
    return(
        <div>
            <h2>Member Details</h2>
            <p>Member ID: {id}</p>
        </div>
    );
}