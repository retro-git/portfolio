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
    //get number of projects in last row
    const numProjectsInLastRow = numProjects % numProjectsPerRow;
    //split projects into the last row and the rest
    const projectsInLastRow = projects.slice(numProjects - numProjectsInLastRow);
    const projectsInRows = projects.slice(0, numProjects - numProjectsInLastRow);

    return (
        <>
            <Navbar />
            <div className={styles["project-grid"]}>
                {projectsInRows.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
            <div className={styles["project-grid"]}>
                {projectsInLastRow.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </>
    )
}
