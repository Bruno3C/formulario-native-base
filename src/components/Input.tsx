import { IInputProps, Input as NativeBaseInput, FormControl, WarningOutlineIcon  } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {

  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bgColor="gray.100"
        fontSize="md"
        h={16}
        mb={1}
        isInvalid={invalid}
        _focus={{ 
          bgColor: "gray.200",
          borderWidth: 1,
          borderColor: "blue.300"
        }}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage 
        _text={{
          color: "red.200"
        }} 
        leftIcon={<WarningOutlineIcon />}
      >
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}