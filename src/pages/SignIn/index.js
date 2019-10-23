import React from 'react';
import { Image } from 'react-native';

import Logo from '~/assets/logo.png';

import { Container, Form, FormInput } from './styles';
import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Image source={Logo} />
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
        </Form>
      </Container>
    </Background>
  );
}
