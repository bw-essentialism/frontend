import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import jwtD from 'jwt-decode';
import './bio.css';

export default function BioList() {
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const theToken = localStorage.getItem('token');
    console.log('JWTD', jwtD(theToken).subject);
    const theUser = jwtD(theToken).subject;

    axiosWithAuth()
      .get(`https://stormy-basin-77789.herokuapp.com/api/users/${theUser}`)
      .then(res => {
        console.log('response', res.data);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
      })
      .catch(err => {
        console.log('backend error', err);
      });
  }, []);

  return (
    <>
      <div className='first-name'> First Name: {firstname}</div>
      <div className='last-name'>Last Name: {lastname}</div>
      <div className='email'>{email}</div>
    </>
  );
}
