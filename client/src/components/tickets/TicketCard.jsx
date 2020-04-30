import React from 'react';



const TicketCard = ({ ticket }) => {
  
  
  
    return (
        <div className='box ticket-card'>
          <div className='title is-6'>{ticket.title}</div> 
          <div >{ticket.description}</div>
      
        </div>
    );
};

export default TicketCard;