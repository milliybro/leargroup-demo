import React, { Component, Fragment } from 'react'
import About from '../about/About'
import SimpleSlider from '../carousel/Carousel'
import Carousel from '../carousel/Certificate'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Group from '../group/Group'
import Header from '../header/Header'
import Layout from '../layout/Layout'
import News from '../news/News'
import Product from '../product/Product'

export class HomePage extends Component {
  render() {
    return (
      <Layout>
         <SimpleSlider />
         <About />
         <Carousel />
         <Product />
         <Contact />
         <Group />
         <News />
      </Layout>
    )
  }
}

export default HomePage