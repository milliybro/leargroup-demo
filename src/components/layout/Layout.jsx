import React, { Component, Fragment } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Backtop from '../share/BackTop'

export class Layout extends Component {
  render() {
    return (
      <Fragment>
         <Backtop href='#'>^</Backtop>
         <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout