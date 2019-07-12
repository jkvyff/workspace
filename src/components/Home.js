import React from 'react';

const Home = (props) => {
    console.log(props)
    return(
        <div>
            <br></br>
            <h1>
                {props.user ? `Welcome to WorkSpace! @${props.user}`
                : 'Welcome To Workspace, Please Sign Up!'}
            </h1>
        </div>
    )
}

export default Home;