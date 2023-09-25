import React, { Component } from "react";
import "./Home.scss";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: #ef7c00;
  color: var(--text-color-text-contrast, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  padding: 10px 20px;
  cursor: pointer;
  width: 171px;
  &:hover {
    color: #ef7c00;
    background: #fff;
    border: 1px solid #ef7c00;
  }
`;

export class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container">
          <div className="home-content">
            <h3>LEANGROUP - тубы и этикетки</h3>
            <h1>Ламинатные тубы</h1>
            <p>
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <Button>Каталог</Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
