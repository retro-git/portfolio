import Image from 'next/image';
import styles from './project.module.scss';
import { marked } from 'marked';
import React, { useRef, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

// component for each social media icon/link
const SocialMediaIcon = ({ url }) => {
    return (
        <div className={styles.socialmediaicon}>
            <SocialIcon url={url} style={{ height: 30, width: 30 }} />
        </div>
    )
}

export default function Project({ project }) {
    const descContainerRef = useRef();

    useEffect(() => {
        if (descContainerRef.current) {
            descContainerRef.current.firstElementChild.classList.add(styles.description);
        }
    });

    return (
        <div className={styles.project}>
            <div><h1 className={styles.title}>{project.name}</h1></div>
            <div className={styles.linkgrid}>{project.links.map((link, i) => {
                return (
                    <SocialMediaIcon key={i} url={link} />
                )
            })}</div>
            <div className={styles.projectbody} onClick={() => window.open(project.url)}>
            <div><Image className={styles.img}
                priority
                src={project.image}
                width={520}
                height={320}
                layout="responsive"
            /></div>
            <div ref={descContainerRef} dangerouslySetInnerHTML={{ __html: marked.parse(project.description) }}></div>
            <div className={styles.techgrid}>
                {project.technologies.map((technology, i) => {
                    return (
                        <div key={i} className={styles.technology}>{technology}</div>
                    )
                })}
            </div>
        </div>
        </div >
    )
}