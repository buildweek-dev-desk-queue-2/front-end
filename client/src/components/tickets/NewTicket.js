import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';


const NewTicket = ({ fetchTickets, isCreating, setIsCreating }) => {

   
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
        setIsCreating(false);
    }
   

    return (
        <div>
             
            <div className='spacer'/>
            {isCreating && (
                <form className='form box' onSubmit={createTicket}>
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