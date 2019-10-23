import React from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // login to retreive the JWT token
    // add the token to localStorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      // base of '/api/login' inside axiosWithAuth in utils folder
      .post("http://localhost:5000/api/auth/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload) & console.log(res, "this");
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;


// import React from "react";
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import axios from "axios";
// import styled from 'styled-components';
 
// const Div= styled.div`
//     margin-top: 40px;
//     display: flex;
//     justify-content: center;
// `
// const Button = styled.button`
//     text-decoration: none;
//     box-shadow:inset 0px 1px 0px 0px #ffffff;
//     background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
//     background-color:#ffffff;
//     border-radius:6px;
//     border:1px solid #dcdcdc;
//     display:inline-block;
//     cursor:pointer;
//     color:#666666;
//     font-family:Arial;
//     font-size:15px;
//     font-weight:bold;
//     padding:6px 24px;
//     text-decoration:none;
//     text-shadow:0px 1px 0px #ffffff;
    
//     &:hover {
//       background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
//       background-color:#f8f8f8;
//     }
    
//     &:active {
//       position:relative;
//       top:1px;
//     }
// `
 
// function Login({touched, errors}){
//   return(
//       <Div className="formcontain">
//     <Form>
//       <div>
//         <label>Email:  </label>
//         <Field name="email" 
//                type="email" 
//                />
//           <p>{touched.email && errors.email}</p>
//       </div>
//       <div>
//         <label>Password:  </label>
//         <Field name="password" 
//                type="password" 
//                />
//          <p>{touched.password && errors.password}</p>      
//       </div>
//       <Button>Submit</Button>
//     </Form>
//     </Div>
//   )
// }
 
// export default withFormik({
//   mapPropsToValues(){
//     return {
//       email: '',
//       password: '',
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string().email().required(),
//     password: Yup.string().min(1).required(),
//   }),
//   handleSubmit(values) {
//     const url = 'https://localhost:5000/api/auth/login';
//     axios.post(url, values)
//       .then(res => {
//         localStorage.setItem('token', res.data.token);
//       })
//       .catch(e => {
//         console.log(e)
//       })
 
//     console.log(values)
//   }
// })(Login);


// import React, { useState } from 'react';
// import { userInfo } from 'os';
// import axios from 'axios';

// const Login = () => {
//     const [user, setUser] = useState({ 
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: ""
//     });
    
//     const changeHandler = e => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//         console.log('Checking user state:',user);
//     };
    
//     const submitHandler = e => {
//         e.preventDefault();
  
//         const url = 'https://localhost:5000/api/auth/login';
//         axios.post(url)
//           .then(res => {
//             localStorage.setItem('token', res.data.token);
//           })
//           .catch(e => {
//             console.log(e)
//           })
//       }

//     return (
//         <React.Fragment>
//             <form onSubmit={submitHandler}>
//                 <input 
//                 type="text"
//                 name="email"
//                 value={user.email}
//                 placeholder="email"
//                 onChange={changeHandler} 
//                 />
                
//                 <input 
//                 type="text"
//                 name="password"
//                 value={user.password}
//                 placeholder="password"
//                 onChange={changeHandler} 
//                 />
//                 <button>Submit</button>
//             </form>
//         </React.Fragment>
//     );
// };

// export default Login;