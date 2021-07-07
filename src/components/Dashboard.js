import React, {useContext} from 'react'
import { AmplifySignOut } from "@aws-amplify/ui-react";
const Dashboard = ({user}) => {
    const { loggedIn, setLoggedIn, signOut } = useContext(AppContext);
    return (
        
        <div>
        {loggedIn && <button onClick={signOut} className="btn">Sign out</button>}
        
        {console.log(user)}
            <h1>Hello: {user.idToken.payload.email}</h1>
            <h2>You are: {user.idToken.payload['cognito:groups'][0]} </h2> 
        </div>
    )
}

export default Dashboard