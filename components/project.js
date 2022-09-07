import Image from 'next/image';
import styles from './project.module.scss';

export default function Project({ project }) {
    return (
        <div className={styles.project} onClick={() => window.open(project.url)}>
            <div><h1 className={styles.title}>{project.name}</h1></div>
            <div><p className={styles.description}>{project.description}</p></div>
            <div><Image className={styles.img}
                priority
                src={project.image}
                width={520}
                height={320}
                layout="responsive"
            /></div>
            <div><ul className={styles.ul}>
                {project.technologies.map((technology, i) => {
                    return (
                        <li key={i} className={styles.technology}>{technology}</li>
                    )
                })}
            </ul></div>
        </div >
    )
}