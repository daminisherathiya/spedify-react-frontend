import React from 'react'
import { load_icon } from "../../components/imagepath";
export default () => {
    return (
        <div id="global-loader" style={{ display: "none" }}>
            <div className="whirly-loader"> </div>
            <div className="loader-img">
                <img src={load_icon} className="img-fluid" alt="" />
            </div>
        </div>
    )
}
