import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';


const SignupForm = () => {
    
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        pwConfirm: ''
    }
    const [formState, setFormState] = useState(initialState);
    const history = useHistory();
    const onChangeHandler = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    
    const signup = e => {
        e.preventDefault();
        console.log(formState);
        history.push('./');
        setFormState(initialState);
    };
    
       return ( 
<div className="blurred-bg-container">
<Navbar />
    <div className="content">
     <div className="text">
         
        <div className='signup-form'>
        <h1 className='title is-2 welcome'>Signup</h1>
          
        <form className='form' onSubmit={signup}>

            <label htmlFor='firstName'>
                    First Name
                <input
                    className='input is-large'
                    type='text'
                    name='firstName'
                    onChange={onChangeHandler}
                    value={formState.firstName}
                />
            </label>


                <label htmlFor='lastName'>
                    Last Name
                <input
                    className='input is-large'
                    type='text'
                    name='lastName'
                    onChange={onChangeHandler}
                    value={formState.lastName}
                />
                </label>

                
                <label htmlFor='email'>
                        Email
                    <div class="field">
                        <p class="control has-icons-left">
                        <input
                        className='input is-large'
                        type='text'
                        name='email'
                        onChange={onChangeHandler}
                        value={formState.email}
                    />
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"/>
                        </span>
                        </p>
                    </div>
                </label>

               

                <label htmlFor='password'>
                    Password
                
                    <div class="field">
                        <p class="control has-icons-left">
                        <input
                            className='input is-large'
                            type='password'
                            name='password'
                            onChange={onChangeHandler}
                            value={formState.password}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"/>
                        </span>
                        </p>
                    </div>
                </label>


                <label htmlFor='pwConfirm'>
                    Confirm Password
                
                    <div class="field">
                        <p class="control has-icons-left">
                        <input
                            className='input is-large'
                            type='pwConfirm'
                            name='pwConfirm'
                            onChange={onChangeHandler}
                            value={formState.pwConfirm}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"/>
                        </span>
                        </p>
                    </div>
                </label>


                <div className='spacer-sm'/>
                <button 
                    type='submit' 
                    className='button is-danger is-large is-rounded'
                >
                    Signup
                </button>
            </form>
            </div>
            </div>
        <div className="blur"></div>
    </div>
</div>
            
            )
    

}

export default SignupForm;