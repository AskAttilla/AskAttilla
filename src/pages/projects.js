import React from "react"

import Layout from "../components/layout"
import ProjectReview from "../components/projectPreview"

import previewImage from "../assets/images/resDisplaySteinhuset3.png"

import projectStyles from "../styles/projects.module.sass"

const ProjectsPage = () => (
  <Layout>
    <div className={projectStyles.container}>
      <h1 className={projectStyles.title}>Projects</h1>
      <div className={projectStyles.projectList}>
        <ProjectReview
          title="Steinhuset.org"
          tag1="Wordpress"
          tag2="AWS"
          github={false}
          eye={true}
          picture={previewImage}
        ></ProjectReview>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
