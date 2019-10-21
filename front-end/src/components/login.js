import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import styled from 'styled-components';

const Div= styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    text-decoration: none;
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
    background-color:#ffffff;
    border-radius:6px;
    border:1px solid #dcdcdc;
    display:inline-block;
    cursor:pointer;
    color:#666666;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;
    
    &:hover {
      background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      background-color:#f8f8f8;
    }
    
    &:active {
      position:relative;
      top:1px;
    }
`

function Login({touched, errors}){
  return(
      <Div className="formcontain">
    <Form>
      <div>
        <label>Email:  </label>
        <Field name="email" 
               type="email" 
               />
          <p>{touched.email && errors.email}</p>
      </div>
      <div>
        <label>Password:  </label>
        <Field name="password" 
               type="password" 
               />
         <p>{touched.password && errors.password}</p>      
      </div>
      <Button>Submit</Button>
    </Form>
    </Div>
  )
}

export default withFormik({
  mapPropsToValues(){
    return {
      email: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
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
})(Login);