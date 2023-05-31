import { useState } from 'react';
import { Box, styled } from '@mui/material';
import weather from '../assets/images/sunny.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import '../App.css';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${weather})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {
    const [result, setResult] = useState({})

    return (
        <Component  className='bg'>
            <Image></Image>
            <Box style={{ width: '100%', height: '80%' }}>
                <Form setResult={setResult} />
                <Information  result={result} />
            </Box>
        </Component>
    )
}

export default Home;