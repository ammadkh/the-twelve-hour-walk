import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const ButtonContainer = styled.View`
  width: ${(props) => `${props.theme.inputSize.default.width}px`};
  height: ${(props) => `${props.theme.inputSize.default.height}px`};
  border-radius: 50px;
  overflow: hidden;
`;

const LinearGradientWrapper = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonComponent = (props) => {
  return (
    <ButtonContainer>
      <LinearGradientWrapper
        colors={["#E36E31", "#D9373B"]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0.1, y: 0.1 }}
        locations={[0, 1]}
      >
        <Text>{props.children}</Text>
      </LinearGradientWrapper>
    </ButtonContainer>
  );
};
