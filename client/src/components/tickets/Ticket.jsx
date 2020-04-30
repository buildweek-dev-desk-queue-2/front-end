import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Navbar from '../navsAndMenues/Navbar';



const Ticket = () => {


    const [ticket, setTicket] = useState({});
    const { id } = useParams();
    const { push } = useHistory();

    
        const grabTicketById = (id) => {
            axiosWithAuth()
              .get(`/ticket/${id}`)
              .then(res => {
                  
                 setTicket(res.data[0])
                 console.log(ticket);
              })
              .catch(err => console.log(err))
            
        }

        useEffect(() => {
            grabTicketById(id)
        },[ ]);

        const edit = e => {
            e.preventDefault();
            push(`/edit-tickets/${id}`)
        }

    return (
        <div className='box ticket'>
            <Navbar />
          <div className='title is-6'>{ticket.title}</div> 
          <div >{ticket.description}</div> 
          <div>{ticket.completed}</div>
          <div>{ticket.user_id}</div>
          <button className='button' onClick={edit}>EDIT</button>
          <button className='button'>SEND</button>
        </div>
    );
};

export default Ticket;