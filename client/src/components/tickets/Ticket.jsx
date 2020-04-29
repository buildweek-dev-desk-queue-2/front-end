import React from 'react';
import { useHistory } from 'react-router-dom';


const Ticket = ({ ticket,  }) => {
  const history = useHistory();
    return (
        <div className='box ticket'>
          <div className='title is-6'>{ticket.title}</div> 
          <div >{ticket.description}</div>
          <button onClick={() => history.push('/dashboard/update-ticket/:id')}>EDIT</button>
        </div>
    );
};

export default Ticket;