import React from 'react';
import styled from 'styled-components';

//data
import FeatureData from './FeatureData';

const Features = () => {
  return (
    <>
      <ContentTitle>Features</ContentTitle>
      <FeatureCard>
        <FeatureName>이름</FeatureName>
        <FeatureContent>내용</FeatureContent>
      </FeatureCard>
    </>
  );
};

const ContentTitle = styled.div`
  width: 100%;
  height: 45px;
  color: var(--main);

  font-size: 20px;
`;

const FeatureCard = styled.div`
  width: 300px;
  width: 300px;
  border: 1px solid var(--main);
`;

const FeatureName = styled.div``;
const FeatureContent = styled.div``;

export default Features;
