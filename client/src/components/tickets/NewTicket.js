import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';


const NewTicket = ({ fetchTickets }) => {

    const [isCreating, setIsCreating] = useState(false);
    const initialState = {
    
        title: '',
        description: '',
        user_id:2
    }

    const [ticket, setTicket] = useState(initialState);

    const onChangeHandler = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }

    const createTicket = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/ticket/', ticket)
        .then(res => {
            fetchTickets();
        })
        .catch(err => console.log(err));
        
        setTicket(initialState);
    }
    const toggleCreating = e => {
            e.preventDefault();
            setIsCreating(!isCreating);
            
    }

    return (
        <div>
            <button className='button is-dark create-ticket-btn' onClick={toggleCreating}>
                Create a Ticket
            </button> 
            <div className='spacer'/>
            {isCreating && (
                <form className='form' onSubmit={createTicket}>
            <label htmlFor='title'>
                Subject
                <input 
                    className='input'
                    type='text'
                    name='title'
                    onChange={onChangeHandler}
                    value={ticket.title}
                />
            </label> 

            <label htmlFor='title'>
                description  
                <textarea
                    className='textarea'
                    type='text'
                    name='description'
                    onChange={onChangeHandler}
                    value={ticket.description}
                />
            </label>
                <button className='button' type='submit'>Create</button>
                <button className='button' onClick={() => {setIsCreating(false)}}>
                    Cancel
                </button>
            </form>
            )}  
        </div>
    );
};

export default NewTicket;