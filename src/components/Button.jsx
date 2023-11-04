import React from "react";
const Button = ({ title = 'Chat', onClick }) => {
    return <div className="cart-hover" style={{ cursor: 'pointer' }} onClick={onClick} >
        <div className="btn-cart">
            {title}
        </div>
    </div>
}

export default Button;