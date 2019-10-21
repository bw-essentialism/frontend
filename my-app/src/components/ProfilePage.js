import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function ProfilePage() {
  return (
    <section className='profile-page'>
      <header>
        <Welcome> My Profile </Welcome>
        <NameOne> First Name </NameOne>
        <NameTwo> Last Name </NameTwo>
        <Email> Email: </Email>
        <Bio> Bio: </Bio>
        <Essentials> The Essentials in my life: </Essentials>
      </header>
      <Card />
    </section>
  );
}

/// styled components:

const Welcome = styled.h1`
  color: purple;
  font-size: 4rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const NameOne = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const NameTwo = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Email = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Bio = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Essentials = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const CardOne = styled.p`
  font-size: 2rem;
  color: black;
  font-family: 'Liu Jian Mao Cao', cursive;
`;
