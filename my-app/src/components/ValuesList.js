import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import MyValues from './data';
import ValueCards from './Card';

export default function ValuesList() {
  const [Values, setValues] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/values`)
      .then(res => {
        console.log('response', res.data);
        // setValues(response);
      });
  }, []);

  return (
    <section className='values-page'>
      <header>
        <Welcome>Values</Welcome>
        <Definition>
          A person's principles or standards of behavior; one's judgment of what is important in life.
        </Definition>
        <Instructions>
          Look through this list of values and select the ones that resonate with you. They will then be added to your
          profile.
        </Instructions>
      </header>
      <CardSection>
        {MyValues.map(Values => {
          return <ValueCards key={Values.id} />;
        })}
        ;
      </CardSection>
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
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px;
`;
