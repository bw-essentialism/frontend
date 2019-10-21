import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


function Register({touched, errors}){
  return(
    <Form>
      <div>
        <label>First Name</label>
        <Field name="firstname" 
               type="text" 
               />
          <p>{touched.firstname && errors.firstname}</p>
      </div>
      <div>
        <label>Last Name</label>
        <Field name="lastname" 
               type="text" 
               />
          <p>{touched.lastname && errors.lastname}</p>
      </div>  
      <div>
        <label>Email</label>
        <Field name="email" 
               type="email" 
               />
          <p>{touched.email && errors.email}</p>
      </div>
      <div>
        <label>Password</label>
        <Field name="password" 
               type="password" 
               />
         <p>{touched.password && errors.password}</p>      
      </div>
      <button>Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues(){
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("Your first name is required"),
    lastname: Yup.string().required("Your last name is required"),
    email: Yup.string().email().required(),
    password: Yup.string().min(2).required(),
  }),
  handleSubmit(values) {
    const url = 'https://mock-users-server.herokuapp.com/api/auth';
    axios.post(url, values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      .catch(e => {
        console.log(e.response.data)
      })

    console.log(values)
  }
})(Register);