import React from 'react';
import {Box,Button,TextField} from '@mui/material';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useMediaQuery} from '@mui/material';
import Header from '../../components/Header/Header';

const initialState={
    firstName:'',
    lastName:'',
    email:'',
    contact:'',
    address1:'',
    address:''
}
const contactRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const userSchema=yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email('Invalid email').required("required"),
    contact: yup.string().matches(contactRegex,'Phone number not valid').required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required")
})

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px")
    const handleSubmit=(values)=>{
        console.log(values)
    }
  return (
    <Box m='20px'>
        <Header heading='Create User' subHeading='Fill up the form to create new user'/>
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}
            validationSchema={userSchema}
        >
         {({values,handleSubmit,handleChange,handleBlur,touched,errors})=>(
            <form onSubmit={handleSubmit}>
                <Box display='grid' gap='30px' gridTemplateColumns ='repeat(4,minmax(0,1fr))' sx={{"& > div":{gridColumn:isNonMobile?undefined:'span 4'}}}>
                    <TextField
                        type='text'
                        value={values.firstName}
                        fullWidth
                        variant='filled'
                        label='First Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='firstName'
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{gridColumn:'span 2'}}
                    />
                    <TextField
                        type='text'
                        value={values.lastName}
                        fullWidth
                        variant='filled'
                        label='Last Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='lastName'
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{gridColumn:'span 2'}}
                    />
                    <TextField
                        type='email'
                        value={values.email}
                        fullWidth
                        variant='filled'
                        label='Email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='email'
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{gridColumn:'span 2'}}
                    />
                    <TextField
                        type='number'
                        value={values.contact}
                        fullWidth
                        variant='filled'
                        label='Contact'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='contact'
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{gridColumn:'span 2'}}
                    />
                    <TextField
                        type='text'
                        value={values.address1}
                        fullWidth
                        variant='filled'
                        label='Address 1'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='address1'
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{gridColumn:'span 4'}}
                    />
                    <TextField
                        type='text'
                        value={values.address2}
                        fullWidth
                        variant='filled'
                        label='Address 2'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='address2'
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{gridColumn:'span 4'}}
                    />
                </Box>
                <Box  display = 'flex'mt = '20px' justifyContent='end'>
                    <Button sx={{padding:'10px 50px'}} type='submit' variant='contained' color='secondary'>Submit</Button>
                </Box>
            </form>
         )}  
        </Formik>
    </Box>
  )
}

export default Form;