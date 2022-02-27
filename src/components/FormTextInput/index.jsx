import React, { forwardRef } from "react";
import {
  Container,
  ContainerTextInput,
  TError,
  Tinput,
  Label,
  ContainerLabel,
} from "./styles";

const FormTextInput = (
  {
    error,
    label,
    iconLeft,
    iconRight,
    style,
    styleBorder,
    styleImage,
    changeIcon,
    ...rest
  },
  ref
) => {
  return (
    <Container style={style}>
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
        </ContainerLabel>
      )}

      <Tinput {...rest} ref={ref} autoCapitalize="none" />

      {error && <TError>{error}</TError>}
    </Container>
  );
};

export default forwardRef(FormTextInput);
