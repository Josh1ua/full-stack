import React, { useState } from 'react';

function SignUpForm() {

    const [formData, setFormData] = useState({
        name:'',
        username:'',
        password:'',
        confirmPassword:'',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name);
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div>
                <h1 className='font-bold w-full text-center mb-4'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='grid border w-max h-max rounded-xl p-2'>
                    <input
                        type='text'
                        required
                        name='name'
                        placeholder='Name'
                        value={FormData.fullName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md w-full p-2 my-2"
                    />
                    <input
                        type='text'
                        required
                        name='username'
                        placeholder='username'
                        value={FormData.username}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md w-full p-2 my-2"
                    />
                    <input 
                        type='email'
                        required
                        name='email'
                        placeholder='email'
                        value={FormData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md w-full p-2 my-2"
                    />
                    <input
                        type='password'
                        required
                        name='password'
                        placeholder='Password'
                        value={FormData.password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md w-full p-2 my-2"
                    />
                    <input
                        type='password'
                        required
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={FormData.confirmPassword}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md w-full p-2 my-2"
                    />
                    {/* <input
                        type='file'
                        name='profilePicture'
                        onChange={handleChange}
                    /> */}
                    <div>
                        <button type='submit' className='w-full text-center border p-2 rounded-md my-2 bg-green-300'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm;