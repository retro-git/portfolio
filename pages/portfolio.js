import fsPromises from 'fs/promises';
import path from 'path'
import Project from '../components/project';
import styles from "../styles/Portfolio.module.scss";
import Navbar from '../components/navbar'

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "projects.json");
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
    return (
        <>
            <Navbar />
            <div className={styles["project-grid"]}>
                {projects.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </>
    )
}
