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

                <div className='bg-gray-400 bg-opacity-30 rounded-md text-white p-3 text-center w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/4 '>
                    {formType ? (
                        <form  onSubmit={submitLogin}>
                            <h2 className='text-xl pb-4' >{"Welcome :)"}</h2>
                            <div className='flex flex-col '>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                className='text-black h-10 rounded mb-4 p-2 focus:outline-none focus:ring-orange-500 focus:ring-2'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-black h-10 rounded mb-4 p-2 focus:outline-none focus:ring-orange-500 focus:ring-2'
                                required
                            />


                            <button type="submit" className="button-64" role="button"><span class="text">Login</span></button>

                            
                            </div>

                            <hr className='my-3 '/>

                            <a onClick={toggleForm} className='cursor-pointer'>
                                Create account
                            </a>
                        </form>
                    ) : (
                        <form onSubmit={submitRegister}>
                            <h2 className='text-xl pb-4' >{"Welcome :)"}</h2>
                            <div className='flex flex-col '>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='text-black h-10 rounded mb-4 p-2 focus:outline-none focus:ring-orange-500 focus:ring-2'
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-black h-10 rounded mb-4 p-2 focus:outline-none focus:ring-orange-500 focus:ring-2'
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='text-black h-10 rounded mb-4 p-2 focus:outline-none focus:ring-orange-500 focus:ring-2'
                                required
                            />
                            <button type="submit" className="button-64" role="button"><span class="text">Register</span></button>
                            </div>
                            <hr className='my-3 '/>
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
