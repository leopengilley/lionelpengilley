import React from "react";

import Layout from '../components/layout';
import Nav from './nav';
import Title from './title';
import About from './about';
import Project from './project';
import Contact from './contact';

export default function Index() {
  return (
    <Layout>
      <Nav/>
      <Title/>
      <About/>
      <Project/>
      <Contact/>
    </Layout>
  )
}
