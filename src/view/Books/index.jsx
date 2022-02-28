import React, { useEffect, useState } from "react";

// import { Container } from './styles';

import ImageBackGround from "../../components/ImageBackGround";
import Book from "../../components/Book";
import Modal from "../../components/Modal";

import BackgroundImage from "../../assets/image/jpg/backgroundImages_books.png";
import ExitIcon from "../../assets/image/svg/log_out.svg";

import BooksController from "../../controllers/Books_Controller";

import { Subtitulo } from "../Login/styles";

import {
  Logo,
  Container,
  ContainerCabecalho,
  ContainerLogo,
  ContainerUsuario,
  Exit,
  ContainerBooks,
} from "./styles";

function Books() {
  const [oneBook, setOneBook] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [bookModal, setBookModal] = useState({});

  useEffect(() => {
    books();
  }, []);

  async function books() {
    const response = await BooksController.read(1, 12);

    setOneBook(response.data.data);
    console.log(response);
  }

  function openModal(id) {
    setIsVisible(true);
    setBookModal(id);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ImageBackGround source={BackgroundImage} />
      <Container>
        <ContainerCabecalho>
          <ContainerLogo>
            <Logo />
            <Subtitulo>Books</Subtitulo>
          </ContainerLogo>
          <ContainerUsuario>
            <span>Bem vindo!, Guilherme!</span>
            <Exit source={ExitIcon} />
          </ContainerUsuario>
        </ContainerCabecalho>
        <ContainerBooks>
          {oneBook &&
            oneBook.map((book) => <Book book={book} onClick={openModal} />)}
        </ContainerBooks>

        {isVisible && (
          <Modal
            bookModal={bookModal}
            onClick={() => {
              setIsVisible(false);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default Books;
