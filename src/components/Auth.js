import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/api/auth/login' : '/api/auth/register';
        try {
            const response = await axios.post(url, { name, email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
                {!isLogin && <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="mb-4 w-full p-2 border" />}
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="mb-4 w-full p-2 border" required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="mb-4 w-full p-2 border" required />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white">{isLogin ? 'Login' : 'Register'}</button>
                <p onClick={() => setIsLogin(!isLogin)} className="cursor-pointer text-blue-500 mt-2">{isLogin ? 'Create an account' : 'Already have an account?'}</p>
            </form>
        </div>
    );
};

export default Auth;