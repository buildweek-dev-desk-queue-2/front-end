import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';


const UpdateTicket = () => {

    const initialState = {
    
        title: '',
        description: '',
        completed: 0
         
    }



    const [ticket, setTicket] = useState(initialState);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() =>{
        axiosWithAuth()
        .get(`/ticket/${id}`)
        .then(res => {
         const data=res.data[0];
               setTicket({
                   ...ticket,
                   title:data.title,
                   description:data.description,
                   completed: data.completed
               })
        })
             .catch(err => console.log(err))
    }, [id]);


    const onChangeHandler = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name] : e.target.value
        })
    }  

    const updateTicket = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/ticket/${id}`, ticket)
        .then(res => {
            
            console.log(res);
            
            history.push(`/tickets/${id}`)
        })
        .catch(err => console.log(err));

    }

    const toggleCompleted = e => {
        setTicket({
            ...ticket,
            completed: !ticket.completed
        })
    }



    return (
        <div>
            
                <form className='form' onSubmit={updateTicket}>
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
                <button className='button' type='submit'>Update</button>
                <button className='completed' onClick={toggleCompleted}>completed</button>
            </form>
            
        </div>
    );
};

export default UpdateTicket;