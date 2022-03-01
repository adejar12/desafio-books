import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import ImageBackGround from "../../components/ImageBackGround";
import Book from "../../components/Book";
import Modal from "../../components/Modal";
import Pages from "../../components/Pages";

import BackgroundImage from "../../assets/image/jpg/backgroundImages_books.png";
import ExitIcon from "../../assets/image/svg/log_out.svg";

import { useBooks } from "../../hooks/books";
import { useAuth } from "../../hooks/auth";

import { getAll } from "../../store/modules/books/actions";
import auth from "../../store/modules/auth/store";

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
  const [isVisible, setIsVisible] = useState(false);
  const [bookModal, setBookModal] = useState({});
  const [page, setPage] = useState(1);

  const books = useBooks();
  const { current_user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getBooks();
  }, [page]);

  async function getBooks() {
    await getAll(page, 12);
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
            <span>Bem vindo!, {current_user.user.name}!</span>
            <Exit
              source={ExitIcon}
              onClick={() => {
                auth.clean();
                navigate("/");
              }}
            />
          </ContainerUsuario>
        </ContainerCabecalho>
        <ContainerBooks>
          {books.books.length > 0 &&
            books.books.map((book) => (
              <Book book={book} onClick={openModal} key={book.id} />
            ))}
        </ContainerBooks>
        <ContainerBooks style={{ justifyContent: "flex-end", marginTop: 0 }}>
          <Pages page={page} setPage={setPage} totalPage={books.totalPages} />
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
