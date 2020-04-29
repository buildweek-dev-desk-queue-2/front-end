import React, { useState, useEffect } from 'react';
import Navbar from './navsAndMenues/Navbar';
import axiosWithAuth from '../utils/axiosWithAuth';
import TicketList from './tickets/TicketList';
import NewTicket from './tickets/NewTicket' ;
import { Route } from 'react-router-dom';
import UpdateTicket from './tickets/UpdateTicket';

const DashBoard = () => {
    
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = () => {
        axiosWithAuth()
        .get('/ticket/')
        .then(res => {
            // console.log(res.data)
            setTickets(res.data);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className=' dash-board'>
            <div className='header'>
                <Navbar />
            </div>
            <div className='columns'>
            <div className='column'>
            
            <TicketList tickets={tickets} />
            </div>
            <div className='column'>
            <div className='title is-4'>
                Welcome to your dashboard 
            </div>
            <NewTicket  fetchTickets={ fetchTickets } />
            <Route path='/dashboard/update-ticket/:id'>
                <UpdateTicket />
            </Route>
            </div>
            </div>
            
        </div>
    )
};

export default DashBoard;