import fsPromises from 'fs/promises';
import path from 'path'
import Project from '../components/project';
import styles from "../styles/Portfolio.module.scss";
import Navbar from '../components/navbar'
import React, { useRef, useState } from 'react'

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data/projects.json");
    const jsonData = await fsPromises.readFile(filePath);
    const projects = JSON.parse(jsonData);

    console.log(projects);

    return {
        props: {
            projects
        }
    }
}

export default function Portfolio({ projects }) {
    //get number of projects
    const numProjects = projects.length;
    //get number of projects per row
    const numProjectsPerRow = 3;
    //get number of rows
    const numRows = Math.ceil(numProjects / numProjectsPerRow);
    //get number of projects in first row
    const numProjectsInFirstRow = numProjects - (numRows - 1) * numProjectsPerRow;
    //get projects in first row
    const projectsInFirstRow = projects.slice(0, numProjectsInFirstRow);
    //get projects in rest of rows
    const projectsInRestOfRows = projects.slice(numProjectsInFirstRow, numProjects);

    return (
        <>
            <Navbar />
            <div className={styles["project-grid"]}>
                {projectsInFirstRow.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
            <div className={styles["project-grid"]}>
                {projectsInRestOfRows.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </>
    )
}
