import React from "react";
import { Link } from "react-router-dom";
const Button = ({ title = 'Chat' }) => {
    return <div className="cart-hover">
      <Link
        to="/chats"
        className="btn-cart"
        tabIndex={-1}
      >
        {title}
      </Link>
    </div>
  }

  export default Button