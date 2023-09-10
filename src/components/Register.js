import { Grid } from '@mui/material'
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../chatbot/config'
import MessageParser from '../chatbot/MessageParser'
import ActionProvider from '../chatbot/ActionProvider'


const Register = () => {
    return (
        <>
            <Grid container justifyContent={'center'} marginTop={'5%'}>
                <Grid item>
                    <img src='https://cdn.reamaze.com/assets/site/products/hp-chatbots-1872b17ca5fc480f959a132ba949f9f33226b164eb4cccd6ec59cd631ffbf9e4.png' alt='chatbot'className='img-fluid' />
                </Grid>
                <Grid item>
                    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </Grid>
            </Grid>
        </>
    )
}

export default Register
