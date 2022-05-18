import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

import One from '../images/one.webp'
import Tow from '../images/tow.webp'
import Three from '../images/three.webp'
import Four from '../images/four.webp'


const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post image={One} />
            <Post image={Tow} />
            <Post image={Three} />
            <Post image={Four} />
        </Box>
    )
}

export default Feed