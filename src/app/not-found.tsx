import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function PageNotFound() {
  return (

    <>
      <Box sx={{ margin: "7rem 0px", }}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
          <Image src={'/404Top.webp'} alt='page not found' />
        </Box>
        <Typography variant='h1' sx={{ fontSize: "25px", display: "flex", justifyContent: "center", margin: "10px 2px" }}>Looks Like you Lost</Typography>
        <Typography sx={{ display: "flex", justifyContent: "center", margin: "10px 2px" }} >We can find the page you are looking for</Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }} >
          <Link href={'/'} >
            <Button variant='contained' color='primary' sx={{background:"#2c7418"}}>Go to Homepage</Button>
          </Link>
        </Box>


      </Box>
    </>
  )
}

export default PageNotFound