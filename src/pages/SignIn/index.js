import React, { useRef, useState } from 'react';
import { Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import Background from '~/components/Background';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  async function handleSubmit() {
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit} loading={loading}>
            <Text>Acessar</Text>
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
