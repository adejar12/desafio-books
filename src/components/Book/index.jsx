import React from "react";

import {
  Container,
  Image,
  ContainetImage,
  ContainetConteudo,
  Titulo,
  Autor,
  Info,
} from "./styles";

function Book({ book, onClick }) {
  return (
    <Container
      onClick={() => {
        onClick(book);
      }}
    >
      <ContainetImage>
        <Image source={book.imageUrl} />
      </ContainetImage>
      <ContainetConteudo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Titulo>{book.title}</Titulo>
          {book.authors.map((oneAuthor) => (
            <Autor>{oneAuthor}</Autor>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Info>{book.pageCount}</Info>
          <Info>{book.publisher}</Info>
          <Info>Publicado em {book.published}</Info>
        </div>
      </ContainetConteudo>
    </Container>
  );
}

export default Book;
