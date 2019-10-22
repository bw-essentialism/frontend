import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';

const ValueCards = props => {
  return (
    <div className='ValueCard'>
      <ValueCard>
        <Card>
          <CardBody>
            <Title>
              <CardTitle> Kindness </CardTitle>
            </Title>
            <CardSubtitle> "Kindness is seeing the best in others when they cannot see it in themselves" </CardSubtitle>
            <Button>Add to my profile</Button>
          </CardBody>
        </Card>
      </ValueCard>
    </div>
  );
};

export default ValueCards;

/// styled components:

const ValueCard = styled.p`
  font-size: 2rem;
  font-family: 'Liu Jian Mao Cao', cursive;
  border: 2px dotted #624f69;
  width: 50%;
  background-color: #a4afcc;
  padding-bottom: 30px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: black;
  font-size: 3rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;
