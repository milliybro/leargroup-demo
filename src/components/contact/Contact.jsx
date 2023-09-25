import React, { Component } from "react";
import "./Contact.scss";

import name from "../../assets/images/input1.png"
import number from "../../assets/images/input2.png"


export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="contact-card">
            <h2>Получить подробную <span>информацию</span></h2>
            <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
            <div className="contact-info">
               <div className="contact-name">
                  <img src={name} alt="" />
                  <input className="name-input" type="text" placeholder="Ваше имя"/>
               </div>
               <div className="contact-name">
                  <img src={number} alt="" />
                  <input className="name-input" type="text" placeholder="+375 (29) 0000000"/>
               </div>
            </div>
               <textarea name="" id="" cols="54" rows="5" placeholder="Комментарий"></textarea>
               <button className="contact-btn">Получить информацию</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
