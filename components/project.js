import Image from 'next/image';
import styles from './project.module.scss';

export default function Project({ project }) {
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
            <div><p className={styles.description}>{project.description}</p></div>
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