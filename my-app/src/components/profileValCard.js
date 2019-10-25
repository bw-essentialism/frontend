import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const ProfileValueCards = props => {
  return (
    <div className='profileValueCard'>
      <ProfileValueCard>
        <Card>
          <CardBody>
            <Title>
              <CardTitle> {props.name} </CardTitle>
            </Title>
          </CardBody>
        </Card>
      </ProfileValueCard>
    </div>
  );
};

export default ProfileValueCards;

/// styled components:

const ProfileValueCard = styled.div`
  border: 2px dotted #624f69;
  width: 350px;
  height: 130px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #624f69;
  font-size: 3rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;
