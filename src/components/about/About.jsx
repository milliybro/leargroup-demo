import React, { Component } from "react";
import "./About.scss";

import about from "../../assets/images/about.png";
import play from "../../assets/images/play.png";
export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container about-container">
          <h1>
            О компании <span>LEANGROUP</span>
          </h1>
          <div className="about-content">
            <div className="about-video">
              <p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Hbi13dX902c?si=KIpFvHvylV3d3nPF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </p>
            </div>
            <div className="about-text">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. <br  /> <br /> Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. <br /> <br /> С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
