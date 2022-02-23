import React from "react";

import Layout from '../components/layout';
import Nav from './nav';
import Title from './title';
import About from './about';
import Project from './project';

export default function Index() {
  return (
    <Layout class="page">
      <Nav/>
      <Title/>
      <About/>
      <Project/>
    </Layout>
  )
}
