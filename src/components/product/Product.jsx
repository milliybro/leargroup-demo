import React, { Component } from "react";
import "./Product.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import style from "styled-components";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";

export const SectionBtn = style.button`
   
    border-radius: 4px;
    border: 1px solid #ef7c00;
    padding: 10px 20px;
    color: var(--color-primary, #ef7c00);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
   background-color: transparent;
   margin: 32px auto 40px auto; 
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover{
      background-color: #ef7c00;
      color: #fff;
   }
`;
export class Product extends Component {
  render() {
    return (
      <section id="product">
        <div className="container">
          <h1>
            Наша <span>продукция</span>
          </h1>
          <Tabs>
            <TabList>
              <Tab>Ламинатные тубы</Tab>
              <Tab>Экструзионные тубы</Tab>
              <Tab>Другая упаковка</Tab>
            </TabList>

            <TabPanel>
              <div className="products">
                <img src={product1} alt="" />
                <img className="over4" src={product2} alt="" />
                <img className="over3" src={product3} alt="" />
                <img className="over2" src={product4} alt="" />
                <img className="over1" src={product5} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="products">
                <img src={product3} alt="" />
                <img className="over4" src={product4} alt="" />
                <img className="over3" src={product5} alt="" />
                <img className="over2" src={product1} alt="" />
                <img className="over1" src={product2} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="products">
                <img src={product5} alt="" />
                <img className="over4" src={product1} alt="" />
                <img className="over3" src={product3} alt="" />
                <img className="over2" src={product4} alt="" />
                <img className="over1" src={product2} alt="" />
              </div>
            </TabPanel>
          </Tabs>
          <SectionBtn>Перейти в каталог</SectionBtn>
        </div>
      </section>
    );
  }
}

export default Product;
