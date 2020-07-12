import React from "react"

import Layout from "../components/layout"
import ProjectReview from "../components/projectPreview"

import previewImage from "../assets/images/resDisplaySteinhuset4.png"

import projectStyles from "../styles/projects.module.sass"

const ProjectsPage = () => (
  <Layout>
    <div className={projectStyles.container}>
      <h1 className={projectStyles.title}>Projects</h1>
      <div className={projectStyles.projectList}>
        <ProjectReview
          title="Steinhuset.org"
          tags="Wordpress, AWS"
          github={false}
          eye={true}
          picture={previewImage}
          className={projectStyles.isOnlyChild}
        />
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
