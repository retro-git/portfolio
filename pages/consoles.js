
import fsPromises from 'fs/promises';
import path from 'path'
import consolestyles from "../styles/Console.module.scss";
import Navbar from '../components/navbar'
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import Grid from "../components/grid"
import gridstyles from '../components/grid.module.scss';
import styles from "../styles/Console.module.scss";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data/consoles.json");
    const jsonData = await fsPromises.readFile(filePath);
    const consoles = JSON.parse(jsonData);

    console.log(consoles);

    return {
        props: {
            consoles
        }
    }
}

//component for each console
const Console = ({ item }) => {
    const console = item;
    //each console has a name, list of mods, and description
    return (
        <>
            <div className={consolestyles.console}>
                <div className={consolestyles.consolehead}>
                    <div><h1 className={consolestyles.title}>{console.name}</h1></div>
                </div>
                <div className={consolestyles.consolebody}>
                    <div><Image className={consolestyles.img}
                        priority
                        src={console.image}
                        width={520}
                        height={320}
                        layout="responsive"
                    /></div>
                    <div className={consolestyles.grid}>
                        <div className={consolestyles.modgrid}>
                            Mods:
                            {console.mods.map((mod, i) => {
                                return (
                                    <div key={i} className={consolestyles.mod}>{mod}</div>
                                )
                            })}
                        </div>
                        <div className={consolestyles.description}>{console.description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Consoles({ consoles }) {
    return (
        <>
            <Navbar />
            <Grid items={consoles} component={Console} style={styles["console-grid"]} numitemsPerRow={2} />
        </>
    )
}