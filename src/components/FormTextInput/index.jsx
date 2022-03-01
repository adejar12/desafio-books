import React, { forwardRef } from "react";
import {
  ContainerInput,
  TextButton,
  Tinput,
  Label,
  ContainerLabel,
  Button,
  Container,
} from "./styles";

const FormTextInput = (
  {
    label,
    iconLeft,
    iconRight,
    style,
    styleBorder,
    styleImage,
    changeIcon,
    button,
    onClick,
    textButton,
    ...rest
  },
  ref
) => {
  return (
    <Container>
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
        </ContainerLabel>
      )}
      <ContainerInput style={style}>
        <Tinput {...rest} ref={ref} autoCapitalize="none" button={button} />
      </ContainerInput>

      {button && (
        <Button>
          <TextButton onClick={onClick}>{textButton}</TextButton>
        </Button>
      )}
    </Container>
  );
};

export default forwardRef(FormTextInput);
