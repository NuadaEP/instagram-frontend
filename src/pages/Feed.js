import React, { Component } from "react";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

export default class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Bruno Cardoso</span>
              <span className="place">Jaú</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img
            src="http://localhost:3333/files/WIN_20190416_10_02_37_Pro.jpg"
            alt=""
          />

          <footer>
            <div className="actions">
              <img src={like} alt="Curtir" />
              <img src={comment} alt="Comentar" />
              <img src={send} alt="Enviar" />
            </div>
            <strong>900</strong>
            <p>
              Um post muito massa da ominiStack!
              <span>#react #reactnative #nodejs</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Bruno Cardoso</span>
              <span className="place">Jaú</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img
            src="http://localhost:3333/files/WIN_20190416_10_02_37_Pro.jpg"
            alt=""
          />

          <footer>
            <div className="actions">
              <img src={like} alt="Curtir" />
              <img src={comment} alt="Comentar" />
              <img src={send} alt="Enviar" />
            </div>
            <strong>900</strong>
            <p>
              Um post muito massa da ominiStack!
              <span>#react #reactnative #nodejs</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}
