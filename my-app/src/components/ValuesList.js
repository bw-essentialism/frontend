import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function ValuesList() {
  return (
    <section className='values-page'>
      <header>
        <Welcome>
          Values: A person's principles or standards of behavior; one's judgment of what is important in life.{' '}
        </Welcome>
      </header>
    </section>
  );
}

/// styled components:

const Welcome = styled.h1`
  color: purple;
  font-size: 4rem;
  font-family: 'Liu Jian Mao Cao', cursive;
  
`;
