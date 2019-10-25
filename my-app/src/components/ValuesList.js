import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import ValueCards from './Card';

export default function ValuesList() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://stormy-basin-77789.herokuapp.com/api/values`)
      .then(res => {
        console.log('response', res.data);
        setValues(res.data);
      });
  }, []);

  return (
    <section className='values-page'>
      <header>
        <Welcome>Values</Welcome>
        <Definition>
          "A person's principles or standards of behavior; one's judgment of what is important in life."
        </Definition>
        <Instructions>
          Look through this list of values and select the ones that resonate with you. They will then be added to your
          profile.
        </Instructions>
      </header>
      <CardSection>
        {values.map(values => {
          return <ValueCards key={values.id} name={values.name} />;
        })}
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
  font-size: 3rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Instructions = styled.h3`
  color: #624f69;
  font-size: 2.5rem;
  font-family: 'Liu Jian Mao Cao', cursive;
  padding-top: 30px;
`;

const CardSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px;
`;
