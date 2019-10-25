import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import ValueCards from './Card';
import jwtD from 'jwt-decode';
import BioList from './bio';
import ProfileValueCards from './profileValCard';

const dummyData = [
  {
    value_id: 1,
    name: 'Athletics',
  },
  {
    value_id: 2,
    name: 'Creativity',
  },
  {
    value_id: 3,
    name: 'Travel',
  },
  {
    value_id: 4,
    name: 'Literature',
  },
  {
    value_id: 5,
    name: 'Charity',
  },
];

export default function ProfilePage() {
  const [userValues, setUserValues] = useState({ values: dummyData });

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    console.log(userId);
    axiosWithAuth()
      .get(`https://stormy-basin-77789.herokuapp.com/api/users/${userId}`)
      .then(res => {
        console.log('response', res.data);
        setUserValues({ ...res.data, ...userValues });
      });
  }, []);
  return (
    <section className='profile-page'>
      <header>
        <Welcome> My Profile </Welcome>
        <BioList />
        <Essentials> The Essentials in my life: </Essentials>
      </header>
      {console.log(userValues)}
      <ProfileCardSection>
        {userValues.values.map(values => {
          return <ProfileValueCards key={values.id} name={values.name} />;
        })}
      </ProfileCardSection>
    </section>
  );
}

/// styled components:

const Welcome = styled.h1`
  color: #624f69;
  font-size: 4rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Essentials = styled.p`
  color: #624f69;
  font-size: 3.5rem;
  font-family: 'Liu Jian Mao Cao', cursive;
  padding-bottom: 20px;
`;

const ProfileCardSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px 50px;
`;
