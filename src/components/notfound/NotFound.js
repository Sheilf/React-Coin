import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () =>{

    return(
        <div className="NotFound">
            <h1 className="NotFound-title"> The page you're looking for is not valid </h1>
            <Link to="/" className="NotFound-link">Go back to Main Page</Link>
        </div>
    )
}

export default NotFound;
