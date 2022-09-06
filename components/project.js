import styles from './project.module.css';
import Image from 'next/image';

export default function Project({ project }) {
    return (
        <>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Image
              priority
              src={project.image}
              height={180}
              width={320}
            />
        </>
    )
}