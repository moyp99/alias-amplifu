import React, {useState} from 'react';
import { Auth } from 'aws-amplify';

const Signup = () => {
    const [email, setEmail] = useState();

    async function signUp(e) {
        e.preventDefault();
        const username = email
        const password = `A${Math.random().toString(36).substring(7)}!` 
        try {
            const { user } = await Auth.signUp({
                username,
                password,
            });
            console.log(user, email, password);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <div>
        <form onSubmit={(e) => signUp(e)}>
            <label htmlFor="email"></label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
           

            <button type="submit" className="">Signup</button>
        </form>
            
        </div>
    )
}

export default Signup
