import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {


  const initialState = {
    username: '',
    password: ''
    }
 const [credentials, setCredentials] = useState(initialState);
 const history = useHistory();

 const onChangeHandler = e => {
    e.preventDefault();
    setCredentials({
        ...credentials,
        [e.target.name] : e.target.value
    });
 };

 const login = e => {
    e.preventDefault();
    console.log(credentials);
    history.push('/dashboard');
    setCredentials(initialState);
}

    return(
        <div className="blurred-bg-container">
            <Navbar />
  <div className="content">
    <div className="text">
    <div className='login-form'>
        <h1 className='title is-2 welcome'>Login</h1>
        
            <form className='form' onSubmit={login}>

                <label htmlFor='username'>
                        User ID (Email)
                    <div class="field">
                        <p class="control has-icons-left">
                        <input
                        className='input is-large'
                        type='text'
                        name='username'
                        onChange={onChangeHandler}
                        value={credentials.username}
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
                            value={credentials.password}
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
                    className='button is-danger is-large is-rounded login-btn'
                >
                    <i class="fas fa-lock-open"/>
                    Login
                </button>
                <div className='spacer-sm'/>
            <Link className='signup-link-2' to='/signup'>Don't have an account? Sign up here</Link>
            </form>
            
        </div>
       
    </div>

    <div className="blur"></div>
  </div>
</div>
    )
};

export default LoginForm;