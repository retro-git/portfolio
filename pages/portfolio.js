import fsPromises from 'fs/promises';
import path from 'path'
// import Project from '../components/project';
// import styles from "../styles/Portfolio.module.scss";
import Navbar from '../components/navbar'
import React, { useRef, useState, useEffect } from 'react'
import Grid from "../components/grid"
import { SocialIcon } from 'react-social-icons';
import { marked } from 'marked';
import Image from 'next/image';
import styles from '../styles/Project.module.scss';
import gridstyles from '../components/grid.module.scss';

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

const SocialMediaIcon = ({ url }) => {
    let bgColor = url.includes("github") ? "#000000" : "";

    return (
        <div className={styles.socialmediaicon}>
            <SocialIcon bgColor={bgColor} fgColor="#ffffff" url={url} style={{ height: 35, width: 35 }} />
        </div>
    )
}

const Project = ({ item }) => {
    const descContainerRef = useRef();

    useEffect(() => {
        if (descContainerRef.current) {
            descContainerRef.current.firstElementChild.classList.add(styles.description);
        }
    });

    return (
        <div className={styles.project}>
            <div className={styles.projecthead}>
                <div onClick={() => window.open(item.url)}><h1 className={styles.title}>{item.name}</h1></div>
                <div className={styles.linkgrid}>{item.links.map((link, i) => {
                    return (
                        <SocialMediaIcon key={i} url={link} />
                    )
                })}
                </div>
            </div>
            <div className={styles.projectbody} onClick={() => window.open(item.url)}>
                <div><Image className={styles.img}
                    priority
                    src={item.image}
                    width={520}
                    height={320}
                    layout="responsive"
                /></div>
                <div ref={descContainerRef} dangerouslySetInnerHTML={{ __html: marked.parse(item.description) }}></div>
                <div className={styles.techgrid}>
                    {item.technologies.map((technology, i) => {
                        return (
                            <div key={i} className={styles.technology}>{technology}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default function Portfolio({ projects }) {
    return (
        <>
        <Navbar />
            <center><h3><a href="https://www.youtube.com/@retro-meister/videos">YouTube channel</a></h3></center>
            <Grid items={projects} component={Project} style={styles["project-grid"]} numitemsPerRow={3}/>
        </>
    )
}
