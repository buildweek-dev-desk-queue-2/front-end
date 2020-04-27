import React from 'react';
import Navbar from './Navbar';

const DashBoard = () => {
    const name='Mohamed'

    return(
        <div className='dash-board'>
            <Navbar />
            <div className='title is-4'> Welcome {name} </div>
        </div>
    )
};

export default DashBoard;