import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
import toggleSwitch from '../reusable/toggleSwitch';

const UpdateTicket = () => {

    const initialState = {
    
        title: '',
        description: '',
        user_id:2,
        completed:'false' 
    }



    const [ticket, setTicket] = useState(initialState);
    const params = useParams();
    const history = useHistory();

    useEffect(() =>{
        axiosWithAuth()
        .get(`/ticket/${params.id}`)
        .then(res => {
         console.log(res)
                //  setTicket(res.data)
        })
             .catch(err => console.log(err))
    }, [params.id]);

    const onChangeHandler = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name] : e.target.value
        })
    }  

    const updateTicket = e => {
        e.preventDefault();
        axios.put(`https://bw-node.herokuapp.com/ticket/${params.id}`, ticket)
        .then(res => {
            
            console.log(res);
            // props.getMovieList();
            history.push(`/dashboard`)
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
                <div className='completed' onClick={toggleCompleted}><toggleSwitch /></div>
            </form>
            
        </div>
    );
};

export default UpdateTicket;