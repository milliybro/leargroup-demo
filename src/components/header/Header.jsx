import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import night from "../../assets/images/night-mode.png";
import light from "../../assets/images/light-mode.png";
import "./headerSite.scss";

export class Header extends Component {
   state = {
      dark: false,
    };
  render() {
   const { dark } = this.state;
   const themeChange = () => {
     document.body.classList.toggle("dark");
     this.setState({ dark: !dark });
   };
    return (
      <header>
        <nav className="container">
          <div className="nav-container">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
            <ul className="nav-list">
              <li>
                <a href="#product">Продукция</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#product">Сертификаты</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#group">Наша команда</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#about">О нас</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#news">Новости</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#jobs">Вакансии</a>
              </li>
              <span className="line"></span>
              <li>
                <a href="#contact">Контакты</a>
              </li>
            </ul>
            <div className="language">
              <h4 className="ru">RU</h4>
              <span className="line"></span>
              <h4 className="en">EN</h4>
            </div>
            <div className="menu">
              <img src={menu} alt="" />
            </div>
            <button className="dark-light" onClick={themeChange}>
               <img src={this.state.dark ? light : night} alt="" />
            
              
              
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
