import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./navbar.module.scss"
import { useRouter } from "next/router";

const pages = [
    "Portfolio",
    "Consoles",
]

export default function Navbar() {

    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <ul>
                <li title="Home" className={router.pathname == "/" ? styles.active : ""}><Link href="/">Home</Link></li>
                {pages.map((page, i) => {
                    return <li key={i} title={page} className={router.pathname == `/${page.toLowerCase()}` ? styles.active : ""}><Link href={`/${page.toLowerCase()}`}>{page}</Link></li>
                })}
            </ul>
        </div>
    )
}