import React, { Component } from 'react'
import "./News.scss"
import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"
import { SectionBtn } from '../product/Product'

export class News extends Component {
  render() {
    return (
      <section id="news">
         <div className="container news-container">
            <h1>Новости</h1>
            <div className="group-item">
               <div className="group-card">
                  <img src={news1} alt="" />
                  <p>28.01.2022</p>
                  <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
               </div>
               <div className="group-card">
                  <img src={news2} alt="" />
                  <p>21.01.2022</p>
                  <h5>"ЛеанГрупп" серебряный призер EcoVadis!</h5>
               </div>
               <div className="group-card">
                  <img src={news3} alt="" />
                  <p>16.12.2021</p>
                  <h5>Туба, как вид упаковки</h5>
               </div>
            </div>
            <SectionBtn>Все новости</SectionBtn>
         </div>
      </section>
    )
  }
}

export default News