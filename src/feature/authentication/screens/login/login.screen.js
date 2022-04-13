import React from "react";
import { View } from "react-native";
import { InputComponent } from "../../../../components/UI/input.component";
import { SafeAreaComponent } from "../../../../components/UI/safe-area.component";
import { Icon } from "@rneui/themed";
import { Spacer } from "../../../../components/UI/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { Text } from "../../../../components/UI/typography.component";
import styled from "styled-components/native";
import { Image } from "react-native";
import { ButtonComponent } from "../../../../components/UI/button.component";

const Wrapper = styled.View``;

export const LoginScreen = () => {
  return (
    <SafeAreaComponent>
      <Image source={require("../../../../assets/vector.png")} />
      <Spacer position="top" size="xlarge">
        <Text variant="heading">Sign In</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <Text variant="label">Ready to start your Walk?</Text>
      </Spacer>
      <Spacer position="top" size="xlarge">
        <InputComponent placeholder="Email" />
      </Spacer>
      <Spacer position="top" size="medium">
        <InputComponent placeholder="Password" icon="visibility" />
      </Spacer>
      <Spacer position="top" size="large">
        <ButtonComponent>Login</ButtonComponent>
      </Spacer>
      <Spacer position="top" size="xlarge">
        <Text variant="caption">Forgot your password?</Text>
      </Spacer>
      <Spacer position="top" size="xlarge">
        <Text variant="caption">Create Your Account</Text>
      </Spacer>
    </SafeAreaComponent>
  );
};
