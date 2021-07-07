import React from 'react'
import { AmplifySignOut } from "@aws-amplify/ui-react";
const Dashboard = ({user}) => {
    return (
        
        <div>
        <AmplifySignOut />
        {console.log(user)}
            <h1>Hello: {user.idToken.payload.email}</h1>
            <h2>You are: {user.idToken.payload['cognito:groups'][0]} </h2> 
        </div>
    )
}

export default Dashboard