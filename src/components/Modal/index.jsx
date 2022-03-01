import React from "react";

import QuotesIcon from "../../assets/image/svg/quotes.svg";
import CloseIcon from "../../assets/image/svg/close.svg";

import {
  Container,
  ContainerModal,
  ContainetImage,
  Image,
  ContainerConteudo,
  Titulo,
  Autor,
  Info,
  ContainerPaginas,
  ContainerResenha,
  Resenha,
  Quotes,
  Close,
} from "./styles";

function Modal({ onClick, bookModal }) {
  return (
    <Container>
      <Close source={CloseIcon} onClick={onClick} />
      <ContainerModal>
        <ContainetImage>
          <Image source={bookModal.imageUrl} />
        </ContainetImage>
        <ContainerConteudo>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Titulo>{bookModal.title}</Titulo>
            <div
              style={{
                marginTop: -5,
                marginBottom: 32,
              }}
            >
              {bookModal.authors.map((oneAuthor, index, row) => (
                <Autor>
                  {oneAuthor}
                  {index + 1 !== row.length && ", "}
                </Autor>
              ))}
            </div>
          </div>
          <Info style={{ marginBottom: 15 }}>INFORMAÇÕES</Info>

          <ContainerPaginas>
            <Info>Páginas</Info>
            <span>{bookModal.pageCount} páginas</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>Editora</Info>
            <span>{bookModal.publisher}</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>Publicação</Info>
            <span>{bookModal.published}</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>Idioma</Info>
            <span>{bookModal.language}</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>Titulo Original</Info>
            <span>{bookModal.title}</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>ISBN-10</Info>
            <span>{bookModal.isbn10}</span>
          </ContainerPaginas>
          <ContainerPaginas>
            <Info>ISBN-13</Info>
            <span>{bookModal.isbn13} </span>
          </ContainerPaginas>
          <Info style={{ marginTop: 15, marginBottom: 15 }}>
            RESENHA DA EDITORA
          </Info>
          <ContainerResenha>
            <Resenha>
              <Quotes source={QuotesIcon} />
              {bookModal.description}
            </Resenha>
          </ContainerResenha>
        </ContainerConteudo>
      </ContainerModal>
    </Container>
  );
}

export default Modal;
