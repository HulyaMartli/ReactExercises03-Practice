import { DATA_ME } from "../data"
import styles from "../assets/styles/AccordionPanel.module.css"
import { useState } from "react"

export function AccordionBody() {

    return (
        <>
        {
            DATA_ME.map((d) => (
                <AccordionPanel key={d.id} {...d} />
            ))
        }
        </>

    )

}

function AccordionPanel({ title, content }) {
    const [hidden, setHidden] = useState(true)

    function handleClick() {
        if (hidden === true) {
            setHidden(false);
        } else {
            setHidden(true);
        }


    }
    return (
        <>
            <button type="button" onClick={handleClick} className={styles.Accordion}>{title}</button>
            <div className={styles.Panel} hidden={hidden}>
                <p>{content}</p>
            </div>
        </>
    )
}

