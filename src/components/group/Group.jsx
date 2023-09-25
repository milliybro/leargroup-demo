import React, { Component } from "react";
import GroupCard from "../card/GroupCard";

import group1 from "../../assets/images/group1.png";
import group2 from "../../assets/images/group2.png";
import group3 from "../../assets/images/group3.png";
import group4 from "../../assets/images/group4.png";
import group5 from "../../assets/images/group5.png";

import "./Gropup.scss"
import { SectionBtn } from "../product/Product";

export class Group extends Component {
  render() {
    return (
      <section id="group">
        <div className="container group-container">
          <h1>Наша <span>команда</span></h1>
          <div className="group-item">
            <GroupCard
              image={group1}
              fullname="Войнич Дарья"
              description="Заместитель директора по продажам"
            >
              <h6>+375 (17) 270-53-77 (317)</h6>
            </GroupCard>
            <GroupCard
              image={group2}
              fullname="Мисько Екатерина"
              description="Начальник отдела сопровождения"
            >
              <h6>+375 (17) 270-53-77 (115)</h6>
              <h6> +375 29 112-73-48</h6>
              <h6>k.melnichenko@leangroup.by</h6>
            </GroupCard>
            <GroupCard
              image={group3}
              fullname="Дмитроченко Дмитрий"
              description="Начальник отдела допечатной подготовки"
            >
              <h6>+375 (17) 270-53-77 (115)</h6>
              <h6> +375 29 112-73-48</h6>
              <h6>k.melnichenko@leangroup.by</h6>
            </GroupCard>
            <GroupCard
              image={group4}
              fullname="Антух Евгений"
              description="Начальник отдела снабжения"
            >
              <h6>+375 (17) 270-53-77 (148)</h6>
              <h6> +375 44 764-16-28</h6>
              <h6>j.antuh@leangroup.by</h6>
            </GroupCard>
            <GroupCard
              image={group5}
              fullname="Мисник Елена"
              description="Специалист по работе с клиентами"
            >
              <h6>+375 (17) 270-53-77 (322)</h6>
              <h6> +375 29 329-34-03</h6>
              <h6>e.misnik@leangroup.by</h6>
            </GroupCard>
          </div>
          <SectionBtn>Наша команда</SectionBtn>
        </div>
      </section>
    );
  }
}

export default Group;
