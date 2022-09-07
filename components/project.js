import Image from 'next/image';
import styles from './project.module.scss';
import { marked } from 'marked';
import  React, { useRef, useLayoutEffect } from 'react';

export default function Project({ project }) {
    const descContainerRef = useRef();

    useLayoutEffect(() => {
        if (descContainerRef.current) {
            descContainerRef.current.firstElementChild.classList.add(styles.description);
        }
    });

    return (
        <div className={styles.project} onClick={() => window.open(project.url)}>
            <div><h1 className={styles.title}>{project.name}</h1></div>
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
        </div >
    )
}