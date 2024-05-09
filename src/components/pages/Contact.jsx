import React from 'react'
import Layout from '../layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,  } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4":{fontWeight:'bold', mb:2 }}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
          A hotel and Restaurants are the place where providing products such as food, accommodation and services to the guests who willing to pay for whatever consumed or experienced by them.
          Basically when the people like to stay or eat out of the home, first they expect the good services, quality products and satisfaction because of this the classification systems is introduced to in hotel and restaurant Industry. Once we search about why people using the classifications systems in hotel and restaurants;
          The people can find the hotel and restaurant in easily according to their budgets, because every one can’t stay in five star hotels and they can’t eat in luxury restaurants, so they can find the hotels and restaurants in their capacity.
          Most of the people they like to stay and eat at quality and luxury hotels and restaurants, because they like to keep their high range so this classification system is most useful to find the highest range of hotels and restaurants also.
          Everyone has a expecting the different facilities, so according to some of classification systems they can find the facilities,
        </p>
      </Box>
         <Box sx={{ m: 3, width:'600px',ml:10, "@media (max-width:600px)":{
          width:'300px',
         }}}>
          <TableContainer component={Paper}>
             <Table aria-label='contact table'>
             <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{color:'red',pt: 1 }}/> 1800-00-0000 (Toroll Free)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon  sx={{color:'skyblue',pt: 1 }}/> help@myrest.com 
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon  sx={{color:'green',pt: 1 }}/> 9604264555
                </TableCell>
              </TableRow>

             </TableBody>

             </Table>
          </TableContainer>
         </Box>

    </Layout>
  )
}

export default Contact