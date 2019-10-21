import React from 'react';
import styled from 'styled-components';

const Welcome = styled.h1`
  color: purple;
  font-size: 4rem;
  font-family: 'Long Cang', cursive;
`;

export default function ProfilePage() {
  return (
    <section className='profile-page'>
      <header>
        <Welcome>Welcome to the PROFILE PAGE! </Welcome>
      </header>
    </section>
  );
}
