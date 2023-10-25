import React from "react";

import Layout from '../components/layout';
import Nav from './nav';
import Title from './title';
import Project from './project';
import Skill from './skill';

export default function Index() {
  return (
    <Layout class="page">
      <Nav/>
      <Title/>
      <Project/>
      <Skill/>
    </Layout>
  )
}
