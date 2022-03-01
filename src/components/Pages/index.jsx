import React, { useState } from "react";

import NextDisabledIcon from "../../assets/image/svg/next_disabled.svg";
import NextEnabledIcon from "../../assets/image/svg/next_enabled.svg";
import PrevDisabledIcon from "../../assets/image/svg/prev_disabled.svg";
import PrevEnabledIcon from "../../assets/image/svg/prev_enabled.svg";

import { Container, NumeroPage, Icon } from "./styles";

function Pages({ page, setPage, totalPage }) {
  return (
    <Container>
      <NumeroPage>
        Página {page} de {Math.round(parseFloat(totalPage))}
      </NumeroPage>
      <Icon
        source={page === 1 ? PrevDisabledIcon : PrevEnabledIcon}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      />
      <Icon
        source={page === 100 ? NextDisabledIcon : NextEnabledIcon}
        onClick={() => {
          if (page < 100) {
            setPage(page + 1);
          }
        }}
      />
    </Container>
  );
}

export default Pages;
