// import React from 'react';

// const Profile = () => {
//     return (
//         <div>
//             <p>You can see this because you're registered!</p>
//         </div>
//     )
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

export default function ValuesList() {
  const [Values, setValues] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:5000/api/values`)
    .then(res => {
      console.log('response', res.data[1].name);
      // setValues(response);
    })
 }, []);
  

  return (
        <div>Yo</div>
  )
    
}

/// styled components:

const Welcome = styled.h1`
  color: #624f69;
  font-size: 5rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Definition = styled.h3`
  color: #624f69;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const Instructions = styled.h3`
  color: #624f69;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`;

const CardSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px;
`;