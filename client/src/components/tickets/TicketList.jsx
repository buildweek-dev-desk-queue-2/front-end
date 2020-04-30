import React from 'react';
import TicketCard from './TicketCard';
import { Link } from 'react-router-dom'

const TicketList = ({ tickets }) => {
    return (
         <div className='ticket-list'>
            <p className='title is-5'/>
            <div>
                {tickets.map(tk => 
                <Link to={`/tickets/${tk.id}`} key={tk.id}>
                    <TicketCard  ticket={tk} />
                </Link>
                )}
            </div>
         </div> 
    );
};

export default TicketList;