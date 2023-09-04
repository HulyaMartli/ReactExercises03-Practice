import { useState } from "react";
import styles from "../assets/styles/Quiz.module.css"



export function Quiz() {

    const [answer, setAnswer] = useState("");

    return (<>

        <QuestionBox answer={answer} setAnswer={setAnswer} />

    </>)


}

function submitAnswer(answer) {

    return new Promise((resolve, reject) => {


        if (answer === "istanbul")

            resolve("Success!")

        else {

            reject(new Error("Nice try!"))

        }

    })

}

function Question({ answer, setAnswer, setStatus }) {

    function handleSubmit(e) {

        e.preventDefault();

        submitAnswer(answer).then(
            message => setStatus(message)
        ).catch(
            err => { setStatus(err.message) }
        )

    }

    return (
        <>

            <form onSubmit={handleSubmit} className={styles.QuizForm}>

                <h3>Question 1: What is the name of the city that is spread out over two continents?</h3>

                <input type="text" onChange={(e) => setAnswer(e.target.value.toLowerCase())} value={answer} placeholder="Cevabınızı buraya girin." />

                <button type="submit" disabled={answer == "" && true}> Cevapla </button>

            </form>
        </>)
}


function QuestionBox({ answer, setAnswer }) {
    const [status, setStatus] = useState("");

    if (status === "") {
        return <Question answer={answer} setAnswer={setAnswer} setStatus={setStatus} />

    } else if (status === "Success!") {
        return (
            <div className={styles.Correct}>
                <h4>{status}</h4>
                <p>The city that is spread out over two continents is <span>İstanbul!</span></p>
            </div>
        )
    } else {
        return (
            <>
                <Question answer={answer} setAnswer={setAnswer} setStatus={setStatus} />

                <div className={styles.False}>
                    <h4>{status}</h4>
                    <p>C&apos;mon you know this... <br/> Let&apos;s try again!</p>
                </div>
            </>

        )
    }
}
