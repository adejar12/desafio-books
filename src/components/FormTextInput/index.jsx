import React, { forwardRef } from "react";
import {
  Container,
  TextButton,
  Tinput,
  Label,
  ContainerLabel,
  Button,
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
    <div
      style={{
        position: "relative",
        width: 368,
      }}
    >
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
        </ContainerLabel>
      )}
      <Container style={style}>
        <Tinput {...rest} ref={ref} autoCapitalize="none" button={button} />
      </Container>

      {button && (
        <Button>
          <TextButton onClick={onClick}>{textButton}</TextButton>
        </Button>
      )}
    </div>
  );
};

export default forwardRef(FormTextInput);
