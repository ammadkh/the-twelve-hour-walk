import React, { useState } from "react";
import { View } from "react-native";
import { InputComponent } from "../../../../components/UI/input.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";
import { Icon, CheckBox } from "@rneui/themed";
import { Spacer } from "../../../../components/UI/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { Text } from "../../../../components/UI/typography.component";
import styled from "styled-components/native";
import { Image } from "react-native";
import { ButtonComponent } from "../../../../components/UI/button.component";
import { CheckBoxComponent } from "../../../../components/UI/checkbox.component";

const NameWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const SignUpScreen = () => {
  return (
    <SafeAreaComponent>
      <Image source={require("../../../../../assets/vector.png")} />
      <Spacer position="top" size="xlarge">
        <Text variant="heading">Create Account</Text>
      </Spacer>
      <Spacer position="top" size="xlarge">
        <NameWrapper>
          <InputComponent placeholder="First Name" small />
          <InputComponent placeholder="Last Name" small />
        </NameWrapper>
      </Spacer>
      <Spacer position="top" size="medium">
        <InputComponent placeholder="Email" />
      </Spacer>
      <Spacer position="top" size="medium">
        <InputComponent placeholder="Password" icon="visibility" />
      </Spacer>
      <Spacer position="top" size="medium">
        <CheckBoxComponent>I agree to terms & conditions.</CheckBoxComponent>
      </Spacer>
      <Spacer position="top" size="medium">
        <ButtonComponent>Sign Up</ButtonComponent>
      </Spacer>
      <Spacer position="top" size="xxlarge">
        <Text variant="caption">Already have an account?</Text>
      </Spacer>
    </SafeAreaComponent>
  );
};
