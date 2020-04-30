import React, { useState, useEffect } from 'react';
import Navbar from './navsAndMenues/Navbar';
import axiosWithAuth from '../utils/axiosWithAuth';
import TicketList from './tickets/TicketList';
import NewTicket from './tickets/NewTicket' ;



const DashBoard = () => {
    
    const [tickets, setTickets] = useState([]);
    const [isCreating, setIsCreating] = useState(false);

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

    const Creating = e => {
        e.preventDefault();
        setIsCreating(true);
    }
        


    return(
        <div className=' dash-board'>

            <div className='header'>
                <Navbar />
                <div className='title is-4'>Welcome to your dashboard </div>
                <button className='button is-dark create-ticket-btn' onClick={Creating}>Create Ticket</button>
            </div>
        
            <TicketList tickets={tickets} />
            
            <NewTicket  fetchTickets={ fetchTickets } isCreating={isCreating} setIsCreating={setIsCreating} />
              
        </div>
    )
};

export default DashBoard;