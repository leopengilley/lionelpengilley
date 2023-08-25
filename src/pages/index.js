import React from "react";

import Layout from '../components/layout';
import Nav from './nav';
import Title from './title';
import Project from './project';

export default function Index() {
  return (
    <Layout class="page">
      <Nav/>
      <Title/>
      <Project/>
    </Layout>
  )
}
