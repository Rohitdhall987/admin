import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {




    const [formType, setFormType] = useState(true); // true for login, false for register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setFormType(!formType);
    };

    const submitLogin = (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('/api/admin_users/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // });

            // const data = await response.json();

            // if (response.ok) {
            //     localStorage.setItem('token', data.token); // Store the new token
            //     navigate('/home');
            // } else {
            //     console.error(data.message);
            // }
            fetch('/api/admin_users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    if (data.token != null) {
                        localStorage.setItem('token', data.token); // Store the new token
                        navigate('/home');
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const submitRegister = (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('/api/admin_users/register', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, password }),
            // });

            // console.log(response);

            // const data =  response.body();

            // if (response.ok) {
            //     localStorage.setItem('token', data.token); // Store the new token
            //     navigate('/home');
            // } else {
            //     console.error(data.message);
            // }
            fetch('/api/admin_users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.token != null) {
                        localStorage.setItem('token', data.token); // Store the new token
                        navigate('/home');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen'>

                <div className='bg-gray-400 bg-opacity-30 rounded-md text-white p-3 text-center w-3/12'>
                    {formType ? (
                        <form  onSubmit={submitLogin}>
                            <h2 className='text-xl pb-4' >Login</h2>
                            <div className='flex flex-col '>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                className='text-black h-10 rounded mb-4 p-2'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-black h-10 rounded mb-4 p-2'
                                required
                            />

                            <button type="submit">Login</button>
                            </div>

                            <a onClick={toggleForm} className='cursor-pointer'>
                                Create account
                            </a>
                        </form>
                    ) : (
                        <form onSubmit={submitRegister}>
                            <h2>Register</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='text-black'
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-black'
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-black'
                                required
                            />
                            <button type="submit" >Register</button>
                            <br />
                            <a onClick={toggleForm}  className='cursor-pointer'>
                                Have an account
                            </a>
                        </form>
                    )}
                </div>

        </div>
    );
}

export default Login;
