import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <>
            <div style={{ float: 'right' }}>&copy; John Leavell - {date}</div> 
            <div style={{ float: 'right', marginLeft: 'auto'}}>
            </div>
        </>

    )
}

export default Footer

