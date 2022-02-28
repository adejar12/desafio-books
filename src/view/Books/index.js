import React, { useEffect } from "react";

// import { Container } from './styles';

import ImageBackGround from "../../components/ImageBackGround";

import BackgroundImage from "../../assets/image/jpg/backgroundImages_books.png";
import BooksController from "../../controllers/Books_Controller";

function Books() {
  useEffect(() => {
    books();
  });

  async function books() {
    const response = await BooksController.read(1, 25);
    console.log(response);
  }

  return (
    <>
      <ImageBackGround source={BackgroundImage} />
    </>
  );
}

export default Books;
