import { Center, Heading, VStack } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(7, 'Senha deve ter no minimo 7 dígitos'),
  password_confirm: yup
  .string()
  .required('Informe a confirmação de senha')
  .oneOf([yup.ref('password'), null], 'A confirmação de senha não é igual.')
})

export function SignUp() {

  function handleSignUp(data: FormDataProps) {
    console.log('data', data);
  }

  const { control, formState: { errors }, handleSubmit } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema)});
  return (
    <VStack flex={1} bgColor="purple.700" px={10}>
      <Center>
        <Heading my={24} color="gray.100" fontSize="3xl">Crie sua conta</Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange }}) => (
            <Input 
              placeholder="Nome"
              errorMessage={errors.name?.message} 
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange }}) => (
            <Input 
              placeholder="E-mail" 
              onChangeText={onChange}
              errorMessage={errors.email?.message} 
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange }}) => (
            <Input 
              placeholder="Senha" 
              onChangeText={onChange}
              errorMessage={errors.password?.message} 
              secureTextEntry
            />
          )}
        />
        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange }}) => (
            <Input 
              placeholder="Confirme sua senha" 
              errorMessage={errors.password_confirm?.message} 
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />
        <Button title='Cadastrar' onPress={handleSubmit(handleSignUp)}/>
      </Center>
    </VStack>
  );
}