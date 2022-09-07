import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./navbar.module.scss"
import { useRouter } from "next/router";

const pages = [
    "Portfolio"
]

export default function Navbar() {

    const router = useRouter();

    return (
        <div class={styles.navbar}>
            <ul>
                <li className={router.pathname == "/" ? styles.active : ""}><Link href="/">Home</Link></li>
                {pages.map((page, index) => {
                    return <li className={router.pathname == `/${page.toLowerCase()}` ? styles.active : ""}><Link href={`/${page.toLowerCase()}`}>{page}</Link></li>
                })}
            </ul>
        </div>
    )
}