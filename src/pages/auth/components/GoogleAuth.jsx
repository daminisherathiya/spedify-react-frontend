import React from 'react'
import { Link } from "react-router-dom";

export default function Google() {
    return (
        <div className="row social-login">
            <div className="col-12">
                <Link to="#" className="btn btn-google btn-block">
                    {" "}
                    Google
                </Link>
            </div>
        </div>
    )
}
