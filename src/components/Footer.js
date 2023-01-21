import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const Footer = () => {
    const [count, setCount] = useState(0);


    return (
        <footer>
        <p>Copyright &copy; 2023</p>
        <p>Aleksa Djordjevic</p>
        <Link to='/about'>About</Link>
        <br/>
        <p>Number of trips I planned: {count}</p>
        <button onClick={() => setCount(count + 1)}>
        Add trip to count
        </button>
        </footer>
    )
}

export default Footer
