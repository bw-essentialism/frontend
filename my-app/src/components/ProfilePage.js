import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function ProfilePage() {
  return (
    <section className='profile-page'>
      <header>
        <Welcome> My Profile </Welcome>
        <Name> First Name, Last Name </Name>
        <Email> Email: </Email>
        <Essentials> The Essentials in my life: </Essentials>
      </header>
      <CardSection>
        <Card />
        <Card />
      </CardSection>
    </section>
  );
}

/// styled components:

const Welcome = styled.h1`
  color: #624f69;
  font-size: 4rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Name = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: 'Roboto', sans-serif;
`;

const Email = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: 'Roboto', sans-serif;
`;

const Essentials = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 20px;
`;

const CardSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px;
`;
