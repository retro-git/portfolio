import Image from 'next/image';
import styles from './project.module.scss';

export default function Project({ project }) {
    return (
        <div className={styles.project} onClick={() => window.open(project.url)}>
            <h1 className={styles.title}>{project.name}</h1>
            <Image className={styles.img}
                priority
                src={project.image}
                width={520}
                height={320}
            />
                        <p>{project.description}</p>
        </div >
    )
}