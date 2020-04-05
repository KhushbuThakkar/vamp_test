import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "@emotion/styled";
// eslint-disable-next-line import/no-extraneous-dependencies
import { keyframes } from "@emotion/core";
import { Flex } from "rebass";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const LoadingDots = () => {
  return (
    <Flex justifyContent="center" p={50}>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </Flex>
  );
};

export default LoadingDots;
