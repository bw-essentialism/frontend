import React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import styled from 'styled-components';

const ValueCards = props => {
  return (
    <div className='ValueCard'>
      <ValueCard>
        <Card>
          <CardBody>
            <Title>
              <CardTitle> {props.name} </CardTitle>
            </Title>
          </CardBody>
          <ValueButton>
            <Button>Add to my profile</Button>
          </ValueButton>
        </Card>
      </ValueCard>
    </div>
  );
};

export default ValueCards;

/// styled components:

const ValueCard = styled.div`
  border: 2px dotted #624f69;
  width: 350px;
  height: 180px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #624f69;
  font-size: 2rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const ValueButton = styled.button`
  margin: 0 auto;
  background-color: #6c757d;
  border-radius: 40px;
  font-size: 2.2rem;
`;
