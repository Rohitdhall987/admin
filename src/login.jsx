import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {


    useEffect(()=>{
        fetch('/api', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    },[]);



    const [formType, setFormType] = useState(true); // true for login, false for register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setFormType(!formType);
    };

    const submitLogin =  (e) => {
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

                if(data.token !=null){
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

    const submitRegister =  (e) => {
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
                if(data.token !=null){
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
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            {formType ? (
                <form onSubmit={submitLogin}>
                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />
                    <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
                    <br />
                    <a onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>
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
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />
                    <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Register</button>
                    <br />
                    <a onClick={toggleForm} >
                        Have an account
                    </a>
                </form>
            )}
        </div>
    );
}

export default Login;
