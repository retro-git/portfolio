//component that takes a json file, a component to render each item, and a style, then renders the items in a grid

import React from 'react';
import styles from './grid.module.scss';

// export default function Grid({ items, component }) {
//     return (
//         <div className={styles.grid}>
//             {items.map((item, i) => {
//                 return (
//                     React.createElement(component, { key: i, item: item })
//                 )
//             })}
//         </div>
//     )
// }

export default function Grid({ items, component, style, numitemsPerRow}) {
    //get number of items
    const numitems = items.length;
    //get number of items per row
    // const numitemsPerRow = 3;
    //get number of rows
    const numRows = Math.ceil(numitems / numitemsPerRow);
    //get number of items in first row
    const numitemsInFirstRow = numitems - (numRows - 1) * numitemsPerRow;
    //get items in first row
    const itemsInFirstRow = items.slice(0, numitemsInFirstRow);
    //get items in rest of rows
    const itemsInRestOfRows = items.slice(numitemsInFirstRow, numitems);

    console.log(items);
    console.log("sdfasdf")

    return (
        <>
            {/* <Navbar /> */}
            <div className={style}>
                {itemsInFirstRow.map((item, i) => (
                    React.createElement(component, { key: i, item: item })
                ))}
            </div>
            <div className={style}>
                {itemsInRestOfRows.map((item, i) => (
                    React.createElement(component, { key: i, item: item })
                ))}
            </div>
        </>
    )
}
