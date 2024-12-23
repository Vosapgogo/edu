import React from "react";
import Container from "../components/UI/Container";

export default function Home() {
  return (
    <div className="hero">
      <Container className="container-sm">
        <p className="hero__title-info">Програмування & Дизайн & Результат</p>
        <h1 className="hero__title">
          <span className="hero__title-sm">Сучасний</span>
          <span className="hero__title-xl">Веб-довідник</span>
        </h1>
        <p className="hero__text">
          Навчайтесь ефективно завдяки відео, статтям та покроковим інструкціям.{" "}
          <br />
          Тут ви знайдете матеріали з YouTube, а також мої практичні
          напрацювання за 6 років. <br /> Додаткові ресурси допоможуть глибше
          зрозуміти кожну тему.
        </p>
        <div className="hero__detail">
          <img
            src="/img/icons/circle-1.png"
            alt=""
            className="hero__detail-img hero__detail-img-1"
          />
          {/* <img src="" alt="" className="hero__detail-img hero__detail-img-2" />
          <img src="" alt="" className="hero__detail-img hero__detail-img-3" />
          <img src="" alt="" className="hero__detail-img hero__detail-img-4" />
          <img src="" alt="" className="hero__detail-img hero__detail-img-5" />
           */}
        </div>
      </Container>
    </div>
  );
}
