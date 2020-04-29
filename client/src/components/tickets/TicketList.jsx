import React from 'react';
import Ticket from './Ticket';

const TicketList = ({ tickets }) => {
    return (
         <div className='ticket-list'>
            <p className='title is-5'/>
            
                {tickets.map(tk => 
                    <Ticket key={tk.id} ticket={tk} />
                )}
            
         </div> 
    );
};

export default TicketList;