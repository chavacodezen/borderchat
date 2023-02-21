import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {
  validateString,
  validateEmail,
  validatePassword,
} from "../utils/validationConstraints";

const SignUpForm = props => {
  const inputChangedHandler = (inputId, inputValue) => {
    if (inputId === "firstName" || inputId === "lastName") {
      console.log(validateString(inputId, inputValue));
    } else if (inputId === "email") {
      console.log(validateEmail(inputId, inputValue));
    } else if (inputId === "password") {
      console.log(validatePassword(inputId, inputValue));
    }
  }

    return (
      <>
        <Input
          id="firstName"
          label="First Name"
          icon="user-o"
          iconSize={24}
          iconPack={FontAwesome}
          onInputChanged={inputChangedHandler}
        />
        <Input
          id="lastName"
          label="Last Name"
          icon="user-o"
          iconSize={24}
          iconPack={FontAwesome}
          onInputChanged={inputChangedHandler}
        />
        <Input
          id="email"
          label="Email"
          icon="mail"
          autoCapitalize="none"
          keyboardType="email-address"
          iconSize={24}
          iconPack={Feather}
          onInputChanged={inputChangedHandler}
        />
        <Input
          id="password"
          label="Password"
          icon="lock"
          autoCapitalize="none"
          secureTextEntry
          iconSize={24}
          iconPack={Feather}
          onInputChanged={inputChangedHandler}
        />
        <SubmitButton
          title="Sign Up"
          style={styles.submitButton}
          onPress={() => console.log("Button pressed")}
        />
      </>
    );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
});


export default SignUpForm;