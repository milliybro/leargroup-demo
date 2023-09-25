import React, { Component } from 'react'

import "./GroupCard.scss"

export class GroupCard extends Component {
  render() {
   const { image, fullname, description, children } =
      this.props;
    return (
      <div className="group__card">
        <img src={image} alt="" />
        <h5>{fullname}</h5>
        <p>{description}</p>
        <h6>
          {children}
        </h6>
      </div>
    )
  }
}

export default GroupCard