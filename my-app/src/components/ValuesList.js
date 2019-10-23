import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function ValuesList() {
  return (
    <section className='values-page'>
      <header>
        <Welcome>Values</Welcome>
        <Definition>
          {' '}
          A person's principles or standards of behavior; one's judgment of what is important in life.
        </Definition>
        <Instructions>
          Look through this list of values and select the ones that resonate with you. They will then be added to your
          profile.
        </Instructions>
        <CardSection>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardSection>
      </header>
    </section>
  );
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 50px;
`;
