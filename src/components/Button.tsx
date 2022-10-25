import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest}: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={16}
      bgColor="orange.400"
      _pressed={{ 
        bgColor: "orange.500"
      }}
      {...rest}
    >
      <Text fontSize="md" color="gray.100">{title}</Text>
    </NativeBaseButton>
  );
}